'use strict';

module.exports = {
    'extends': [
        './rules/best-practices',
        './rules/errors',
        './rules/strict',
        './rules/style',
        './rules/variables',
        './rules/jsdoc',
    ].map(require.resolve),
    'parserOptions': {
        'ecmaVersion': 5,
        'sourceType': 'script',
    },
};
