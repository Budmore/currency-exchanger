module.exports = {
    printWidth: 120,
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    tabWidth: 2,
    jsxSingleQuote: true,
    jsxBracketSameLine: false,
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
