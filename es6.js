'use strict';

module.exports = {
    'extends': [
        './es5',
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
