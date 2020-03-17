'use strict';

const testFilePatterns = require('@moxy/eslint-config-base/lib/test-patterns');

module.exports = {
    'extends': [
        './rules/react',
        './rules/react-hooks',
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
    'settings': {
        'react': {
            'version': 'detect', // React version, "detect" automatically picks the version you have installed
        },
    },
    'overrides': [
        {
            'files': testFilePatterns,
            // Disable rules that are cumbersome in tests
            'rules': {
                'react/jsx-no-bind': 0,
                'react/prop-types': 0,
            },
        },
    ],
};
