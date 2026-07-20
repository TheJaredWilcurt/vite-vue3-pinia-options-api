import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from '@/views/HomePage.vue';
import PiniaDemo from '@/views/PiniaDemo.vue';
import ResourceLinks from '@/views/ResourceLinks.vue';

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: PiniaDemo
    },
    {
      path: '/resources',
      name: 'resources',
      component: ResourceLinks
    },
    {
      path: '/:catchAll(.*)*',
      name: '404',
      redirect: '/'
    }
  ]
});
