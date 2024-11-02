const typescriptParser = require('@typescript-eslint/parser');
const typescriptPlugin = require('@typescript-eslint/eslint-plugin');
const eslintPluginReact = require('eslint-plugin-react');
const eslintPluginReactHooks = require('eslint-plugin-react-hooks');
const eslintPluginJest = require('eslint-plugin-jest');
const eslintPluginImport = require('eslint-plugin-import');
const eslintPluginPrettier = require('eslint-plugin-prettier');
const eslintPluginCompat = require('eslint-plugin-compat');
const eslintPluginPromise = require('eslint-plugin-promise');
const eslintPluginNode = require('eslint-plugin-n');
const prettierConfig = require('./prettier');

const eslintConfig = [
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            parser: typescriptParser,
            ecmaVersion: 2021,
            sourceType: 'module',
            globals: {
                document: false,
                navigator: false,
                window: false,
                jsx: true
            }
        },
        settings: {
            react: {
                pragma: 'React',
                version: 'detect'
            },
            'mdx/code-blocks': true
        },
        plugins: {
            '@typescript-eslint': typescriptPlugin,
            import: eslintPluginImport,
            prettier: eslintPluginPrettier,
            n: eslintPluginNode,
            promise: eslintPluginPromise,
            react: eslintPluginReact,
            'react-hooks': eslintPluginReactHooks,
            jest: eslintPluginJest,
            compat: eslintPluginCompat
        },
        rules: {
            'prettier/prettier': ['error', prettierConfig],
            'react-hooks/rules-of-hooks': 'error',
            'react/prop-types': 'off',
            'react/jsx-filename-extension': [
                'warn',
                {
                    extensions: ['.jsx', '.tsx', '.mdx']
                }
            ],
            'compat/compat': 'error'
        }
    },
    {
        files: ['**/*rc.js', '**/*.config.js', '**/*.cjs'],
        rules: {
            '@typescript-eslint/no-var-requires': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off'
        }
    }
];

module.exports = eslintConfig;
