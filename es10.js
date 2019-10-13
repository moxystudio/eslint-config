'use strict';

module.exports = {
    'extends': [
        './es9',
    ].map(require.resolve),
    'parserOptions': {
        'ecmaVersion': 2019,
        'sourceType': 'script',
    },
};
