import { createPinia } from 'pinia';
import { createApp } from 'vue';
import constantsPlugin from 'vue-options-api-constants-plugin';

import { router } from '@/router/index.js';

import App from '@/App.vue';

import '@/assets/main.css';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(constantsPlugin);
app.mount('#app');
