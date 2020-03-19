'use strict';

module.exports = {
    extends: [
        './es2017',
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2018,
    },
    rules: {
        // Require object spread properties to be used instead of Object.assign()
        'prefer-object-spread': 'error',
    },
};
