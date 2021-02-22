module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2018,
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        browser: true,
        es6: true,
        node: true,
        'jest/globals': true
    },
    globals: {
        document: false,
        navigator: false,
        window: false
    },
    settings: {
        react: {
            pragma: 'React',
            version: 'detect'
        }
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'prettier',
        'plugin:prettier/recommended',
        'plugin:jest/recommended',
        'plugin:compat/recommended'
    ],
    plugins: [
        '@typescript-eslint',
        'import',
        'prettier',
        'node',
        'promise',
        'react',
        'react-hooks',
        'jest',
        'compat'
    ],
    rules: {
        'prettier/prettier': ['error', { singleQuote: true, semi: true }],
        'react-hooks/rules-of-hooks': 'error',
        'react/prop-types': 'off',
        'react/jsx-filename-extension': [
            'warn',
            {
                extensions: ['.jsx', '.tsx']
            }
        ],
        'compat/compat': 'error'
    },
    overrides: [
        {
            files: ['*rc.js', '*rc.js', '*.config.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
                '@typescript-eslint/explicit-function-return-type': 'off'
            }
        }
    ]
};
