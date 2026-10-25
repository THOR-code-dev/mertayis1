import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Actions ile deploy edilirken repo adı '/mertayis1/', Vercel veya localde '/' kullanılır
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? '/mertayis1/' : '/',
  server: {
    port: 3000,
    open: true
  }
});
