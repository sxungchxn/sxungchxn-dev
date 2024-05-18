import { resolve } from 'node:path'
import { defineConfig, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'
import { visualizer } from 'rollup-plugin-visualizer'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    // parse tsconfig paths
    tsconfigPaths(),
    // declaration type concerned plugin
    dts({
      copyDtsFiles: true,
      outDir: 'dist',
      include: ['src'],
      exclude: ['node_modules', 'dist', '**/*.stories.tsx', '**/*.test.ts*', './src/vite-env.d.ts'],
    }),
    // bundle visualizer
    visualizer() as unknown as PluginOption,
    // vanilla extract
    vanillaExtractPlugin({
      identifiers: mode === 'development' ? 'debug' : 'short',
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  test: {
    globals: true,
    setupFiles: ['./src/tests/setup-tests.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
    environment: 'jsdom',
    environmentOptions: {
      jsdom: {
        resources: 'usable',
      },
    },
  },
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
}))
