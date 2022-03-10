import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',
  },
  plugins: [
    tsconfigPaths(),
    react({
      fastRefresh: process.env.NODE_ENV !== 'test',
      babel: {
        plugins: ["effector/babel-plugin"],
        babelrc: false,
        configFile: false,
      }
    }),
    legacy({
      targets: ['defaults', '> 0.5%', 'not IE 11']
    }),
  ],
})
