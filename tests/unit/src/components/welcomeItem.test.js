import WelcomeItem from '@/components/WelcomeItem.vue';

import testHelpers from '@@/unit/testHelpers.js';

describe('WelcomeItem', () => {
  const setupWrapper = async (slots) => {
    const options = { slots };
    const wrapper = await testHelpers.mount(WelcomeItem, options);
    return wrapper;
  };

  describe('Template', () => {
    test('Renders slots correctly', async () => {
      const slots = {
        heading: '<em>Heading</em>',
        default: '<p>Text</p>'
      };
      const wrapper = await setupWrapper(slots);

      expect(wrapper)
        .toMatchInlineSnapshot(`
          <div class="item">
            <div class="details">
              <h3>
                <em>
                  Heading
                </em>
              </h3>
              <p>
                Text
              </p>
            </div>
          </div>
        `);
    });
  });
});
