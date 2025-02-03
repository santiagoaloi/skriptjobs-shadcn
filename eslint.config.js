import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(antfu(
  {
    unocss: true,
    formatters: true,
    stylistic: {
      quotes: 'single',
    },

    ignores: [
      'node_modules',
      'public',
      '**/*.d.ts', // ignore all .d.ts files
      '**/.*', // ignore all files and directories starting with a dot
      '**/*.lock', // ignore all files and directories ending with .lock
    ],

    vue: {

      overrides: {

        'vue/html-comment-indent': ['error'],
        'vue/html-comment-content-spacing': ['error', 'always'],
        'vue/html-comment-content-newline': [
          'error',
          {
            singleline: 'never',
            multiline: 'never',
          },
        ],

        'vue/block-tag-newline': [
          'error',
          {
            singleline: 'always',
            multiline: 'always',
            maxEmptyLines: 0,
            blocks: {
              template: {
                singleline: 'always',
                multiline: 'always',
                maxEmptyLines: 0,
              },
              script: {
                singleline: 'always',
                multiline: 'always',
                maxEmptyLines: 0,
              },
            },
          },
        ],

        'vue/define-macros-order': [
          'error',
          {
            order: ['defineProps', 'defineEmits'],
          },
        ],

        // Enforce PascalCase for component names in Vue templates.
        // For example, <some-component /> becomes <SomeComponent />
        'vue/component-name-in-template-casing': [
          'error',
          'PascalCase',
          {
            registeredComponentsOnly: false,
            ignores: [],
          },
        ],

        // Define the order of attributes in Vue templates.
        'vue/attributes-order': [
          'error',
          {
            order: [
              'DEFINITION',
              'LIST_RENDERING',
              'CONDITIONALS',
              'RENDER_MODIFIERS',
              'GLOBAL',
              ['UNIQUE', 'SLOT'],
              'TWO_WAY_BINDING',
              'ATTR_DYNAMIC',
              'OTHER_DIRECTIVES',
              ['ATTR_STATIC', 'ATTR_SHORTHAND_BOOL'],
              'EVENTS',
              'CONTENT',
            ],
            alphabetical: true,
          },
        ],
        'vue/multi-word-component-names': 'off',
      },
    },
  },

  {
    rules: {
      // Allow trailing space in comments, for possible JSDoc formattings
      'style/no-trailing-spaces': ['error', { ignoreComments: true }],
      // Relaxes inline statements a bit
      'style/max-statements-per-line': ['error', { max: 2 }],
    },

  },
  // Allow trailing space for markdown formatting
  {
    files: ['**/*.md'],
    rules: {
      'style/no-trailing-spaces': 'off',
    },
  },
))
