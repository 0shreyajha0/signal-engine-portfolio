import { defineConfig } from 'vite';

// base: '/' for local dev and custom domains. The GitHub Pages workflow passes
// --base automatically (/<repo>/ on <user>.github.io), so you never need to change this.
export default defineConfig({
  base: '/',
  server: { port: 5173 },
  build: { outDir: 'dist', sourcemap: false },
});
