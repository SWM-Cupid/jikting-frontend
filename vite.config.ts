import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://jikting.com:8080',
      },
    },
  },
  plugins: [react(), tsconfigPaths(), svgr({ exportAsDefault: true })],
});
