'use strict';

module.exports = {
    'plugins': [
        'import',
        'jsdoc',
    ],
    'extends': [
        './lib/rules/best-practices',
        './lib/rules/errors',
        './lib/rules/es6',
        './lib/rules/jsdoc',
        './lib/rules/node',
        './lib/rules/strict',
        './lib/rules/style',
        './lib/rules/variables',
    ].map(require.resolve),
    'env': {
        'es6': true,
    },
    'parserOptions': {
        'ecmaVersion': 2015,
    },
    'overrides': [
        {
            'files': './*.config.js',
            'env': {
                'node': true,
            },
            'extends': [
                './lib/rules/cjs-modules',
            ],
        },
    ],
};
