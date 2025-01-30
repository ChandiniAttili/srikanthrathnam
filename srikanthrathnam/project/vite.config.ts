import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist', // Make sure output directory is correctly specified
    rollupOptions: {
      input: '/index.html', // Ensure that Vite is correctly processing the entry file
    },
  },
});