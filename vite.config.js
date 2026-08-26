import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages repo adı: mertayis1
export default defineConfig({
  plugins: [react()],
  base: '/mertayis1/',
  server: {
    port: 3000,
    open: true
  }
});
