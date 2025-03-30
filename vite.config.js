/* eslint-disable import/no-extraneous-dependencies */

import { fileURLToPath, URL } from 'node:url';

/* eslint-disable-next-line */
import vue from '@vitejs/plugin-vue';
/* eslint-disable-next-line */
import { defineConfig } from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools';

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools({
      launchEditor: 'subl'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
