'use strict';

module.exports = {
    extends: [
        './es2015',
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2016,
    },
    rules: {
        // Disallow certain properties on certain objects
        'prefer-exponentiation-operator': 'error',
    },
};
