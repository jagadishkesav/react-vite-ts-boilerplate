module.exports = {
  env: {
      browser: true,
      node: true,
      es2021: true,
      'jest/globals': true
  },
  extends: [
      'plugin:react/recommended',
      'airbnb',
      'prettier',
      'plugin:@tanstack/eslint-plugin-query/recommended'
  ],
  settings: {
      'import/resolver': {
          node: {
              paths: ['src'],
              extensions: ['.js', '.jsx', '.ts', '.tsx']
          },
          typescript: {}
      }
  },
  parserOptions: {
      project: 'tsconfig.json',
      tsconfigRootDir: __dirname,
      ecmaVersion: 12,
      sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', 'prettier', '@tanstack/query'],
  rules: {
      'prettier/prettier': 'error',
      'arrow-parens': 'off',
      'arrow-body-style': 'off',
      'react/jsx-filename-extension': [1, { allow: 'as-needed' }],
      'react/destructuring-assignment': 0,
      'react/prop-types': [0],
      'comma-dangle': [0, 'always-multiline'],
      'no-underscore-dangle': 0,
      camelcase: [0],
      'react/jsx-no-bind': [0],
      'import/no-unresolved': [0],
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'no-use-before-define': 0,
      'no-nested-ternary': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'no-plusplus': 'off',
      'class-methods-use-this': 'off',
      'react/forbid-prop-types': 'off',
      'no-console': ['warn', { allow: ['debug', 'error', 'warn'] }],
      'linebreak-style': 'off',
      'react/jsx-props-no-spreading': 0,
      'react/react-in-jsx-scope': 'off',
      'import/prefer-default-export': 'off',
      'react/jsx-fragments': 0,
      'func-names': 'off',
      'import/no-dynamic-require': 'off',
      'global-require': 'off',
      'jsx-a11y/anchor-is-valid': [
          'error',
          {
              components: ['Link'],
              specialLink: ['hrefLeft', 'hrefRight'],
              aspects: ['invalidHref', 'preferButton']
          }
      ],
      'jsx-a11y/label-has-associated-control': 'off',
      'consistent-return': 'off',
      'max-classes-per-file': 'off',
      'no-prototype-builtins': 'off',
      'react/no-array-index-key': 'off',
      'react/no-children-prop': 'off',
      'react/jsx-no-useless-fragment': 'off',
      'react/jsx-no-constructed-context-values': 'off',
      'react/function-component-definition': [
          2,
          {
              namedComponents: 'arrow-function',
              unnamedComponents: 'arrow-function'
          }
      ],
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
      'array-callback-return': 'off',
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'import/extensions': [
          'error',
          'ignorePackages',
          {
              js: 'never',
              jsx: 'never',
              ts: 'never',
              tsx: 'never'
          }
      ],
      '@tanstack/query/exhaustive-deps': 'error'
  },
  overrides: [
      // TypeScript
      {
          files: ['*.ts', '*.tsx'],
          extends: [
              'plugin:react/recommended',
              'airbnb-typescript',
              'plugin:@typescript-eslint/recommended',
              'plugin:@typescript-eslint/recommended-requiring-type-checking',
              'prettier'
          ],
          plugins: ['@typescript-eslint'],
          rules: {
              'react/jsx-uses-react': 'off',
              'react/react-in-jsx-scope': 'off',
              'react/prop-types': 'off', // Since we do not use prop-types
              'react/require-default-props': 'off', // Since we do not use prop-types
              '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
              '@typescript-eslint/consistent-type-assertions': [
                  'error',
                  { assertionStyle: 'never' }
              ]
          }
      }
  ]
};
