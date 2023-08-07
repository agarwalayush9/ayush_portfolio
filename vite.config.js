import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_APP_EMAILJS_PUBLIC_KEY':JSON.stringify(process.env.VITE_APP_EMAILJS_PUBLIC_KEY),
    'process.env.VITE_APP_EMAILJS_SERVICE_KEY':JSON.stringify(process.env.VITE_APP_EMAILJS_SERVICE_KEY),
    'process.env.VITE_APP_EMAILJS_TEMPLATE_KEY':JSON.stringify(process.env.VITE_APP_EMAILJS_TEMPLATE_KEY)
  }
})