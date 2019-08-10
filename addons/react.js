'use strict';

module.exports = {
    'extends': [
        '../rules/react',
        '../rules/react-hooks',
    ].map(require.resolve),
    'plugins': [
        'react',
        'react-hooks',
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true,
        },
    },
};
