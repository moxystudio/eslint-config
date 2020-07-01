'use strict';

const testFilePatterns = require('@moxy/eslint-config-base/lib/test-patterns');

module.exports = {
    plugins: [
        'react-native-a11y',
    ],
    overrides: [
        {
            files: testFilePatterns,
            // Disable rules that are cumbersome in tests
            rules: {
                'react-native-a11y/has-accessibility-hint': 0,
            },
        },
    ],
};
