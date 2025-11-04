import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // ✅ gunakan base relatif untuk Vercel
  plugins: [react()],
})
