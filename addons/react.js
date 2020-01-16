'use strict';

var testFilePatterns = require('./common/test-patterns');

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
    'overrides': [{
        'files': testFilePatterns,
        // Disable rules that are cumbersome in tests
        'rules': {
            'react/jsx-no-bind': 0,
            'react/prop-types': 0,
        },
    }],
};
