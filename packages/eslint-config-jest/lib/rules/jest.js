// Jest: https://github.com/facebook/jest/tree/master/packages/eslint-plugin-jest

'use strict';

module.exports = {
    'rules': {
        // Disallow disabled Tests
        'jest/no-disabled-tests': 'warn',
        // No focused tests
        'jest/no-focused-tests': 'error',
        // No identical title
        'jest/no-identical-title': 'error',
        // Prefer toHaveLength() over toBe()
        'jest/prefer-to-have-length': 'error',
        // Ensure expect is called correctly
        'jest/valid-expect': 'error',
    },
};
