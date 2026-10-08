import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Bind to 0.0.0.0 so the site works behind preview proxies as well.
export default defineConfig({
  plugins: [react()],
  server: { host: true, port: 5173, allowedHosts: true },
  preview: { host: true, port: 4173, allowedHosts: true },
})
