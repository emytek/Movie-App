import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      'api': 'http://www.omdbapi.com/?i=tt3896198&apikey=f58f8e9c'
    },
  },
  plugins: [react()],
})
