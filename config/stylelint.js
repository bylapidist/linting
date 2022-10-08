module.exports = {
    plugins: ['stylelint-no-unsupported-browser-features'],
    extends: ['stylelint-config-recommended', 'stylelint-config-css-modules'],
    rules: {
        'plugin/no-unsupported-browser-features': [
            true,
            {
                severity: 'warning'
            }
        ]
    }
};
