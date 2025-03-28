/* eslint-disable import/no-extraneous-dependencies */

import { fileURLToPath, URL } from 'node:url';

/* eslint-disable-next-line */
import vue from '@vitejs/plugin-vue';
/* eslint-disable-next-line */
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
