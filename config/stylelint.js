module.exports = {
    customSyntax: '@stylelint/postcss-css-in-js',
    processors: ['stylelint-processor-styled-components'],
    plugins: ['stylelint-no-unsupported-browser-features'],
    extends: [
        'stylelint-config-recommended',
        'stylelint-config-styled-components'
    ],
    rules: {
        'plugin/no-unsupported-browser-features': [
            true,
            {
                severity: 'warning'
            }
        ]
    }
};
