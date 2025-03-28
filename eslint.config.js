/* eslint-disable import/no-extraneous-dependencies */

import path from 'node:path';

import pluginJs from '@eslint/js';
import tjwBase from 'eslint-config-tjw-base';
import tjwImport from 'eslint-config-tjw-import';
import tjwVue from 'eslint-config-tjw-vue';
import pluginImport from 'eslint-plugin-import';
import pluginVue from 'eslint-plugin-vue';
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility';
import globals from 'globals';

const __dirname = import.meta.dirname;
const vue3Recommended = pluginVue.configs['flat/recommended'];
const vueA11yRecommended = pluginVueA11y.configs['flat/recommended'];

export default [
  pluginJs.configs.recommended,
  tjwBase,

  pluginImport.flatConfigs.recommended,
  tjwImport,

  ...vue3Recommended,
  ...vueA11yRecommended,
  tjwVue,

  {
    languageOptions: {
      globals: globals.browser
    },
    rules: {
      'import/no-anonymous-default-export': 'off',
      'import/no-namespace': 'off',
      'import/no-unresolved': 'off',
      'import/no-unused-modules': 'off',
      'vue/no-multiple-template-root': [
        'off'
      ],
      'vuejs-accessibility/label-has-for': [
        'error',
        {
          components: ['Label'],
          required: {
            some: ['nesting', 'id']
          },
          allowChildren: false
        }
      ]
    },
    settings: {
      'import/resolver': {
        vite: {
          viteConfig: {
            resolve: {
              alias: {
                '@': path.resolve(__dirname, 'src'),
                '@@': path.resolve(__dirname, 'tests'),
                '@@@': path.resolve(__dirname, 'docs')
              }
            }
          }
        }
      }
    }
  }
];
