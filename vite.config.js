import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path is set to "/" for local dev and Netlify/Vercel-style hosting.
// The GitHub Actions workflow overrides this at build time (via --base)
// to "/<repo-name>/" so the app works on a GitHub Pages *project* site
// (https://<user>.github.io/<repo-name>/). If you deploy to a GitHub
// Pages *user* site (https://<user>.github.io/), leave this as "/".
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
  },
})
