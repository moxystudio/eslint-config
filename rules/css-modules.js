// eslint-plugin-css-modules: https://github.com/atfzl/eslint-plugin-css-modules

'use strict';

module.exports = {
    'rules': {
        // Alerts whenever a CSS class is not being used
        'css-modules/no-unused-class': [1, { 'camelCase': true }],
        // Alerts when using a CSS class that is not defined
        'css-modules/no-undef-class': [2, { 'camelCase': true }],
    },
};
