import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import rollupNodePolyFill from 'rollup-plugin-polyfill-node';

export default defineConfig({
  plugins: [
    react(),
  ],
  define: {
    global: 'window', // sets global for browser
  },
  resolve: {
    alias: {
      buffer: 'buffer',
      process: 'process/browser',
    },
  },
  optimizeDeps: {
    include: ['buffer', 'process'],
  },
  build: {
    rollupOptions: {
      plugins: [
        rollupNodePolyFill(), // polyfill Node built-ins
      ],
    },
  },
  // server: {
  //   proxy: {
  //     '/api': 'http://localhost:8080',
  //   }
  // }
});
