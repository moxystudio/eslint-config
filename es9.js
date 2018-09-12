'use strict';

module.exports = {
    'extends': [
        './es8',
    ].map(require.resolve),
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'script',
    },
    'rules': {
        // Require object spread properties to be used instead of Object.assign()
        'prefer-object-spread': 2,
    },
};
