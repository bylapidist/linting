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
        'prettier/@typescript-eslint',
        'plugin:@typescript-eslint/recommended',
        'prettier/react',
        'plugin:jest/recommended'
    ],
    plugins: [
        '@typescript-eslint',
        'import',
        'prettier',
        'node',
        'promise',
        'react',
        'react-hooks',
        'jest'
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
        ]
    }
};
