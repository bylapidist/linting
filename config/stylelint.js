module.exports = {
    plugins: ['stylelint-no-unsupported-browser-features'],
    extends: [
        'stylelint-config-recommended',
        'stylelint-config-css-modules',
        'stylelint-config-standard-scss'
    ],
    rules: {
        'custom-property-pattern': [
            '^([a-z][a-z0-9]*)(-[a-z0-9]+)*((__[a-z0-9]+)*(-[a-z0-9]+)*)$',
            {
                message: 'Expected custom property name to be BEM-like'
            }
        ]
    }
};
