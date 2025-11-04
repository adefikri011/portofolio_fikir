import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // ⚠️ bukan '/portofolio_fikri_adee/' dan bukan '/'
})
