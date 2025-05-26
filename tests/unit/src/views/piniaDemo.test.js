import PiniaDemo from '@/views/PiniaDemo.vue';

import testHelpers from '@@/unit/testHelpers.js';

describe('PiniaDemo', () => {
  const setupWrapper = async () => {
    const options = {};
    const wrapper = await testHelpers.mount(PiniaDemo, options);
    return wrapper;
  };

  test('Mounts and renders', async () => {
    const wrapper = await setupWrapper();

    expect(wrapper)
      .toMatchSnapshot();
  });

  test('Counter increments', async () => {
    const wrapper = await setupWrapper();

    expect(wrapper.find('[data-test="count"]').text())
      .toEqual('2');

    expect(wrapper.find('[data-test="doubled"]').text())
      .toEqual('4');

    const button = wrapper.find('[data-test="increment"]');
    await button.trigger('click');

    expect(wrapper.find('[data-test="count"]').text())
      .toEqual('3');

    expect(wrapper.find('[data-test="doubled"]').text())
      .toEqual('6');
  });
});
