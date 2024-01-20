import { resolve } from 'node:path'
import { defineConfig, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // parse tsconfig paths
    tsconfigPaths(),

    // declaration type concerned plugin
    dts({
      copyDtsFiles: true,
      include: ['src', 'src/types/global.d.ts'],
      exclude: ['node_modules', 'dist', '**/*.stories.tsx', '**/*.test.ts*', './src/vite-env.d.ts'],
    }),
    visualizer() as unknown as PluginOption,
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'seungchan-dev-ui',
      fileName: 'seungchan-dev-ui',
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
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
})
