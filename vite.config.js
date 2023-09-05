import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist', // Specify the output directory for the production build
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});