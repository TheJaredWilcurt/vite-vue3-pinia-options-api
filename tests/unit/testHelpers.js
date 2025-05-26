import { createTestingPinia } from '@pinia/testing';
import { mount, shallowMount } from '@vue/test-utils';

import { router } from '@/router/index.js';

export default {
  setupOptions: function (options) {
    options = options || {};
    options.global = options.global || {};

    options.global.plugins = [
      router,
      createTestingPinia({
        stubActions: false
      })
    ];

    return options;
  },
  shallowMount: function (component, options) {
    options = this.setupOptions(options);
    const wrapper = shallowMount(component, options);
    return wrapper;
  },
  mount: function (component, options) {
    options = this.setupOptions(options);
    const wrapper = mount(component, options);
    return wrapper;
  }
};
