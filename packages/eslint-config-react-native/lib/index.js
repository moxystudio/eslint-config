'use strict';

const testFilePatterns = require('@moxy/eslint-config-base/lib/test-patterns');

module.exports = {
    extends: [
        './rules/react-native',
        './rules/platform-specific-components',
    ].map(require.resolve),
    plugins: [
        'react-native',
    ],
    env: {
        'react-native/react-native': true,
    },
    settings: {
        'import/resolver': 'react-native',
    },
    overrides: [
        {
            files: testFilePatterns,
            // Disable rules that are cumbersome in tests
            rules: {
                'react-native/no-inline-styles': 0,
            },
        },
    ],
};
