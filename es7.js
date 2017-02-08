'use strict';

module.exports = {
    'extends': [
        './es6',
    ].map(require.resolve),
    'parserOptions': {
        'ecmaVersion': 7,
        'sourceType': 'module',
    },
};
