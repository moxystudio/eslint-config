'use strict';

module.exports = {
    'extends': [
        './rules/best-practices',
        './rules/errors',
        './rules/jsdoc',
        './rules/strict',
        './rules/style',
        './rules/variables',
        './rules/es6',
    ].map(require.resolve),
    'env': {
        'es6': true,
    },
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'script',
    },
};
