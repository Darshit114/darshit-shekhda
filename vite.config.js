import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' makes the build work on both <user>.github.io and <user>.github.io/<repo>
export default defineConfig({
  plugins: [react()],
  base: './',
})
