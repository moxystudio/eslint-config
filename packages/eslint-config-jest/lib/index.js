'use strict';

const testFilePatterns = require('@moxy/eslint-config-base/lib/test-patterns');

module.exports = {
    overrides: [
        {
            files: testFilePatterns,
            plugins: [
                'jest',
            ],
            env: {
                'jest/globals': true,
            },
            extends: [
                './rules/jest',
            ].map(require.resolve),
            rules: {
                // Allow `require` as it's needed for when we are using `jest.doMock` and friends
                'import/no-commonjs': 0,
            },
        },
    ],
};
