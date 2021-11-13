module.exports = {
    semi: true,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'es5',
    arrowParens: 'avoid',
    bracketSpacing: true,
    overrides: [
        {
            files: '*.{ts,tsx,js,jsx}',
            options: {
                tabWidth: 4,
            },
        },
    ],
};
