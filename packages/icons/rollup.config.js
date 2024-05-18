import { readdirSync } from 'fs'
import { DEFAULT_EXTENSIONS } from '@babel/core'
import { babel } from '@rollup/plugin-babel'
import { defineConfig } from 'rollup'
import { visualizer } from 'rollup-plugin-visualizer'
import virtual from '@rollup/plugin-virtual'
import terser from '@rollup/plugin-terser'

// supported file extensions in plugins
const extensions = [...DEFAULT_EXTENSIONS, '.ts', '.tsx', '.svg']

const configPath = {
  input: {
    icons: 'src',
  },
  output: {
    react: 'react',
  },
}

const iconBasePath = new URL(`./${configPath.input.icons}`, import.meta.url).pathname
const iconFileNames = readdirSync(configPath.input.icons, 'utf-8')

const iconNames = []
const iconImportLines = []
const iconExportLines = []
const iconObjectLines = []
const iconComponentTypes = []

iconFileNames.forEach(iconFileName => {
  const iconName = iconFileName.replace('.js', '')

  if (iconName === 'index') return

  iconNames.push(`'${iconName}'`)
  iconImportLines.push(`import ${iconName} from '../${configPath.input.icons}/${iconFileName}'`)
  iconExportLines.push(`${iconName},`)
  iconObjectLines.push(`'${iconName}': ${iconName},`)
  iconComponentTypes.push(`export declare const ${iconName}: IconSource`)
})

const ICONS_OBJECT = 'icons'

// entry 파일 내용
const entryModuleContent = `
  ${iconImportLines.join('\n')}
  const ${ICONS_OBJECT} = { ${iconObjectLines.join('\n')} }
  export { ${iconExportLines.concat(`${ICONS_OBJECT},`).join('\n')} }
`
// type 파일 내용
const entryTypesContent = `
declare module '*.svg' {
  const content: string
  export default content
}

export declare type IconSource = React.FunctionComponent<React.ComponentPropsWithRef<'svg'>>

export declare type IconName = ${iconNames.join(' | ')}
/**
 * @deprecated If you import this module, all icons are bundled, so please import and use the individual icons.
 * @example
 * import { IconX } from '@sxungchxn/dev-icons'
 */
export declare const icons: Record<IconName, IconSource>

${iconComponentTypes.join('\n')}
`.trim()

/**
 * @type {import('rollup').PluginImpl}
 */
function emitFile({ fileName, source }) {
  return {
    name: 'emitFile',
    buildEnd() {
      if (source.length === 0) {
        this.warn('source content is empty')
      }

      this.emitFile({
        type: 'asset',
        fileName,
        source,
      })
    },
  }
}

// split bundled icon files into chunks
function manualChunks(id) {
  if (id.startsWith(iconBasePath)) {
    return id.replace(iconBasePath, `${configPath.output.react}`).replace('.js', '')
  }
  return undefined
}

export default defineConfig({
  input: 'src/index.ts',
  output: [
    {
      format: 'cjs',
      // https://rollupjs.org/configuration-options/#output-interop
      interop: 'auto',
      dir: 'dist',
      entryFileNames: '[name].cjs',
      chunkFileNames: '[name].cjs',
      manualChunks,
    },
    {
      format: 'esm',
      dir: 'dist',
      entryFileNames: '[name].js',
      chunkFileNames: '[name].js',
      manualChunks,
    },
  ],
  external: ['react', 'react/jsx-runtime', /@babel\/runtime/],
  plugins: [
    // creating virtual entry based on entryModuleContent
    virtual({ 'src/index.ts': entryModuleContent }),
    // transpile src files with babel
    babel({
      extensions,
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
      plugins: ['@babel/plugin-transform-runtime'],
    }),
    // esm dts file
    emitFile({
      fileName: 'index.d.ts',
      source: entryTypesContent,
    }),
    // bundle minify
    terser({
      // forwardRef가 있는 경우 treeshake 되지 않는 이슈 방지를 위해 #PURE annotation 보존, mangle 방지
      mangle: {
        reserved: ['forwardRef'],
      },
      format: {
        preserve_annotations: true,
      },
    }),
    visualizer(),
  ],
})
