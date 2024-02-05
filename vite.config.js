import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import copy from 'rollup-plugin-copy';
import glob from 'glob';

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: glob.sync('./src/*.html'),
    },
    outDir: '../dist',
    sourcemap: false,
  },
  plugins: [
    injectHTML(),
    FullReload(['./src/**/**.html']),
    copy({
      targets: [{ src: 'src/assets', dest: 'dist' }],
      // Другие опции копирования, если необходимо
    }),
  ],
});
