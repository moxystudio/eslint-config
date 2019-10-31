// eslint-plugin-css-modules: https://github.com/atfzl/eslint-plugin-css-modules

'use strict';

module.exports = {
    'rules': {
        // Warns  to the existence of unused  css classes
        'css-modules/no-unused-class': [1, { 'camelCase': true }],
        // Alerts to the usage of undefined css class
        'css-modules/no-undef-class': [2, { 'camelCase': true }],
    },
};
