import { createRouter, createWebHashHistory } from 'vue-router';

import FsExample from '@/views/FsExample.vue';
import HelloWorld from '@/views/HelloWorld.vue';
import PiniaDemo from '@/views/PiniaDemo.vue';
import ResourceLinks from '@.views/ResourceLinks.vue';

export const router = createRouter({
  history: createWebHashHistory();
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: HelloWorld
    },
    {
      path:
    }
  ]
})
