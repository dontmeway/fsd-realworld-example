import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import svgrPlugin from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',
  },
  plugins: [
    tsconfigPaths(),
    legacy({
      targets: ['defaults', '> 0.5%', 'not IE 11']
    }),
    react(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
})
