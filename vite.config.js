import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace '/sa-report/' with your actual repo name if different
export default defineConfig({
  plugins: [react()],
  base: '/sa-report/',
})
