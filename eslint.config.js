import js from '@eslint/js';
import react from 'eslint-plugin-react';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import tanstackQuery from '@tanstack/eslint-plugin-query';

export default [
    {
        ignores: ['node_modules/', 'dist/', 'build/', 'eslint.config.js', 'vite.config.ts']
    },
    js.configs.recommended,
    {
        files: ['src/**/*.{js,ts,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parser: tsparser,
            parserOptions: {
                project: 'tsconfig.json',
                tsconfigRootDir: process.cwd()
            },
            globals: {
                document: 'readonly',
                window: 'readonly',
                console: 'readonly'
            }
        },
        plugins: {
            react,
            '@typescript-eslint': tseslint,
            'jsx-a11y': jsxA11y,
            import: importPlugin,
            prettier,
            '@tanstack/query': tanstackQuery
        },
        settings: {
            react: {
                version: 'detect'
            },
            'import/resolver': {
                typescript: {}
            }
        },
        rules: {
            'prettier/prettier': 'error',
            'arrow-parens': 'off',
            'arrow-body-style': 'off',
            'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
            'react/destructuring-assignment': 0,
            'react/prop-types': 0,
            'comma-dangle': [0, 'always-multiline'],
            'no-underscore-dangle': 0,
            camelcase: 0,
            'react/jsx-no-bind': 0,
            'import/no-unresolved': 0,
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
            '@tanstack/query/exhaustive-deps': 'error',
            'import/order': [
                'error',
                {
                    groups: [
                        'builtin', // Node.js built-ins (fs, path, etc.)
                        'external', // External packages (react, axios, lodash, etc.)
                        'internal', // Internal aliases (e.g., @/utils, @/constants)
                        ['parent', 'sibling', 'index'] // Relative imports
                    ],
                    pathGroups: [
                        {
                            pattern: '@/**',
                            group: 'internal',
                            position: 'before'
                        }
                    ],
                    'newlines-between': 'never',
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true
                    }
                }
            ]
        }
    },
    {
        files: ['*.ts', '*.tsx'],
        languageOptions: {
            parserOptions: {
                project: 'tsconfig.json',
                tsconfigRootDir: process.cwd()
            }
        },
        rules: {
            'react/jsx-uses-react': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'react/require-default-props': 'off',
            '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
            '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'never' }]
        }
    }
];
