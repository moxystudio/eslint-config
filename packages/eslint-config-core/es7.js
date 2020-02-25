'use strict';

module.exports = {
    'extends': [
        './es6',
    ].map(require.resolve),
    'parserOptions': {
        'ecmaVersion': 7,
        'sourceType': 'script',
    },
    'rules': {
        // Disallow certain properties on certain objects
        // comment: if this rule on rules/best-practices is modified, this one needs to be updated too
        'no-restricted-properties': [2, {
            'object': 'Math',
            'property': 'pow',
            'message': 'Use the exponentiation operator (**) instead.',
        }],
    },
};
