import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://188.131.164.41:3000',
        rewrite: (path) => path.replace(/^\/api/, ''),
        changeOrigin: true
      }
    }
  }
})
