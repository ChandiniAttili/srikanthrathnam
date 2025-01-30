import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // Ensure the root is set to the project directory
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html', // Ensure this points to the correct HTML file
    },
  },
});
