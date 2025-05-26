import ResourceLink from '@/components/ResourceLink.vue';

import testHelpers from '@@/unit/testHelpers.js';

describe('ResourceLink', () => {
  // Props
  const text = 'Vue.js';
  const link = 'https://vuejs.org';
  const requiredProps = {
    text,
    link
  };

  const setupWrapper = async (props) => {
    const options = {
      props: {
        ...requiredProps,
        ...props
      }
    };
    const wrapper = await testHelpers.mount(ResourceLink, options);
    return wrapper;
  };

  describe('Props', () => {
    test('Renders correctly', async () => {
      const wrapper = await setupWrapper();

      expect(wrapper)
        .toMatchInlineSnapshot(`
          <a
            href="https://vuejs.org"
            rel="noopener"
            target="_blank"
          >Vue.js</a>
        `);
    });
  });
});
