/* eslint-disable */
import viteReact from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteReact()],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  resolve: {
    alias: [
      {
        find: 'axios',
        replacement: path.resolve(__dirname, './node_modules/axios/'),
      },
      { find: 'app', replacement: path.resolve(__dirname, './src/app/') },
      {
        find: 'assets',
        replacement: path.resolve(__dirname, './public/assets/'),
      },
      { find: 'shared', replacement: path.resolve(__dirname, './src/shared/') },
      { find: 'tests', replacement: path.resolve(__dirname, './tests/') },
    ],
  },
  server: {
    port: 3000,
    proxy: {
      '/tourApi': {
        target: 'https://apis.data.go.kr/B551011/KorService1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/tourApi/, ''),
      },
    },
  },
});
