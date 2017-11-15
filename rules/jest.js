// Jest: https://github.com/facebook/jest/tree/master/packages/eslint-plugin-jest

'use strict';

module.exports = {
    'rules': {
        // Disallow disabled Tests
        'jest/no-disabled-tests': 1,
        // No focused tests
        'jest/no-focused-tests': 2,
        // No identical title
        'jest/no-identical-title': 2,
        // Ensure expect is called correctly
        'jest/valid-expect': 2,
    },
};
