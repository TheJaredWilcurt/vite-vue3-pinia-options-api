/** @typedef {import('vue3-snapshot-serializer/types').SETTINGS} SETTINGS */

global.beforeEach(() => {
  /** @type {SETTINGS} */
  const snapshotSettings = {
    formatting: {
    }
  };
  global.vueSnapshots = snapshotSettings;
});

global.afterEach(() => {
});
