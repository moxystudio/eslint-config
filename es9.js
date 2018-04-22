'use strict';

module.exports = {
    'extends': [
        './es8',
    ].map(require.resolve),
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'script',
    },
};
