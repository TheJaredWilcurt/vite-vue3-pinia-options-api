import ResourceLinks from '@/views/ResourceLinks.vue';

import testHelpers from '@@/unit/testHelpers.js';

describe('ResourceLinks', () => {
  const setupWrapper = async () => {
    const options = {};
    const wrapper = await testHelpers.mount(ResourceLinks, options);
    return wrapper;
  };

  test('Mounts and renders', async () => {
    const wrapper = await setupWrapper();

    expect(wrapper)
      .toMatchSnapshot();
  });
});
