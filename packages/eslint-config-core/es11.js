'use strict';

module.exports = {
    'extends': [
        './es10',
    ].map(require.resolve),
    'parserOptions': {
        'ecmaVersion': 2020,
        'sourceType': 'script',
    },
};
