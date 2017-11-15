'use strict';

module.exports = {
    'env': {
        'jest/globals': true,
    },
    'extends': [
        '../rules/jest',
    ].map(require.resolve),
    'plugins': [
        'jest',
    ],
};
