import { defineConfig } from 'vite';

// base: '/' works for a custom domain (shreyajha.in) or <user>.github.io.
// If you deploy to https://<user>.github.io/<repo>/ instead, set base: '/<repo>/'.
export default defineConfig({
  base: '/',
  server: { port: 5173 },
  build: { outDir: 'dist', sourcemap: false },
});
