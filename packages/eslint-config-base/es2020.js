'use strict';

module.exports = {
    'extends': [
        './es2019',
    ].map(require.resolve),
    'env': {
        'es2020': true,
    },
    'parserOptions': {
        'ecmaVersion': 2020,
    },
};
