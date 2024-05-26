import type { Plugin, SourceDescription } from 'rollup'
import { dirname, posix } from 'path'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'
import { visualizer } from 'rollup-plugin-visualizer'
import { resolve } from 'node:path'
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin'
import preserveDirectives from 'rollup-plugin-preserve-directives'

/* css 파일명 들의 집합 */
export const emittedCSSFiles = new Set<string>()

/**
 * 하나의 번들된 css 파일을 생성하는 커스텀 플러그인
 */
export const bundleCssEmits = (): Plugin => ({
  name: 'bundle-css-emits',
  buildStart() {
    emittedCSSFiles.clear()
  },
  renderChunk(code, chunkInfo) {
    const allImports = [
      ...code.matchAll(/import (?:.* from )?['"]([^;'"]*)['"];?/g),
    ] as unknown as Array<[string, string]>
    const _dirname = dirname(chunkInfo.fileName)
    const output = allImports.reduce((resultingCode, [importLine, moduleId]) => {
      if (emittedCSSFiles.has(posix.join(_dirname, moduleId))) {
        return resultingCode.replace(importLine, '')
      }
      return resultingCode
    }, code)
    return {
      code: output,
      map: (chunkInfo as unknown as SourceDescription).map ?? null,
    }
  },
  /**
   * 파일 하나로 합치면서 어느 파일에서 온 내용인지 주석으로 표시
   */
  generateBundle(_, bundle) {
    const bundleCode = Array.from(emittedCSSFiles.values())
      .map(file => bundle[file])
      .map(
        bundleInfo =>
          `/* ${bundleInfo?.name} -> ${bundleInfo?.fileName} */\n` +
          (bundleInfo as unknown as { source: string }).source,
      )
      .join('\n\n')
    this.emitFile({
      type: 'asset',
      name: 'src/index.css',
      source: bundleCode,
    })
  },
})

export default defineConfig(({ command }) => ({
  publicDir: command === 'build' ? false : 'public',
  plugins: [
    /* parse tsconfig paths */
    tsconfigPaths(),
    /* declaration type concerned plugin */
    dts({
      copyDtsFiles: true,
      tsconfigPath: './tsconfig.build.json',
    }),
    /* bundle visualizer */
    visualizer(),
  ],
  build: {
    emptyOutDir: false,
    terserOptions: {
      compress: {
        directives: false,
      },
    },
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
      input: ['src/index.ts'],
      external: ['react', 'react-dom', 'framer-motion'],
      preserveEntrySignatures: 'strict',
      plugins: [
        vanillaExtractPlugin({
          identifiers: 'short',
        }),
        // use client가 유지되도록 플러그인 추가
        preserveDirectives(),
      ],
      // ignore use client directive in vite
      // https://github.com/TanStack/query/issues/5175
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE' || warning.code === 'SOURCEMAP_ERROR') {
          return
        }
        warn(warning)
      },
      output: [
        {
          plugins: [bundleCssEmits()],
          format: 'esm',
          dir: 'dist',
          preserveModules: true,
          preserveModulesRoot: 'src',
          /* .css.js 파일을 다른 이름으로 변환하여 vanilla-extract-plugin 말고 다른것들에 의해 소비 되는 것을 방지 */
          entryFileNames({ name }) {
            return `${name.replace(/\.css$/, '.css.vanilla')}.js`
          },
          assetFileNames(assetInfo) {
            /* css 파일은 asset 폴더에 넣어둔다 */
            const assetPath = assetInfo.name?.replace(/^src\//, 'assets/') ?? ''
            /* watch 모드에서 지워지지 않은 이전 결과물(assets/index.css)는 참조하지 않도록 한다 */
            if (assetPath.match(/\.css$/) && assetPath !== 'assets/index.css') {
              emittedCSSFiles.add(assetPath)
            }
            return assetPath
          },
          globals: {
            'react-dom': 'ReactDOM',
            react: 'React',
            'framer-motion': 'FramerMotion',
          },
        },
        {
          format: 'cjs',
          dir: 'dist',
          /* .css.js 파일을 다른 이름으로 변환하여 vanilla-extract-plugin 말고 다른것들에 의해 소비 되는 것을 방지 */
          entryFileNames({ name }) {
            return `${name.replace(/\.css$/, '.css.vanilla')}.cjs`
          },
          globals: {
            'react-dom': 'ReactDOM',
            react: 'React',
            'framer-motion': 'FramerMotion',
          },
        },
      ],
    },
  },
  resolve: {
    dedupe: ['react', 'react-dom', 'framer-motion'],
  },
}))
