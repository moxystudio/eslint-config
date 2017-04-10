'use strict';

module.exports = {
    'extends': [
        './rules/best-practices',
        './rules/errors',
        './rules/jsdoc',
        './rules/strict',
        './rules/style',
        './rules/variables',
    ].map(require.resolve),
    'parserOptions': {
        'ecmaVersion': 5,
        'sourceType': 'script',
    },
};
