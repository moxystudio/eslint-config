'use strict';

module.exports = {
    'plugins': [
        'prefer-object-spread',
    ],
    'rules': {
        // Require object spread properties to be used instead of Object.assign()
        'prefer-object-spread/prefer-object-spread': 2,
    },
    'parserOptions': {
        'ecmaFeatures': {
            'experimentalObjectRestSpread': true,
        },
    },
};
