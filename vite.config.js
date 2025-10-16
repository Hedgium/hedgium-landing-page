import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],

  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        fonts: './fonts.html',
        // Add more HTML files as needed
      }
    }
  }
})