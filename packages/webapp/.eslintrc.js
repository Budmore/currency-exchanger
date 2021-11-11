module.exports = {
    env: {
        browser: true,
        node: true,
        jest: true,
    },

    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    plugins: ['prettier'],
    rules: {
        'no-unused-vars': 'off',
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'no-console': 'error',
        'no-undef': 'error',

        'react/prop-types': 'off',
        'react/jsx-no-useless-fragment': ['error'],
        'react/jsx-boolean-value': ['error', 'never'],
        'react/react-in-jsx-scope': 'off',

        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
};
