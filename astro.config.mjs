import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://xe9labs.com',
  compressHTML: true,
  build: {
    // Enable compression for better performance
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      // Optimize CSS
      cssCodeSplit: true,
      // Enable minification
      minify: 'terser',
      // Configure terser for better optimization
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    },
    // Enable CSS optimization
    css: {
      devSourcemap: true
    }
  }
});
