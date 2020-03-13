'use strict';

const jestPlugin = require('eslint-plugin-jest');
const testFilePatterns = require('@moxy/eslint-config-core/lib/test-patterns');

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
    'overrides': [{
        'env': {
            'jest/globals': false,
        },
        'files': [
            '**/*.js',
        ],
        'excludedFiles': testFilePatterns,
        // Disable all rules provided by Jest plugin
        'rules': Object.keys(jestPlugin.rules).reduce((rules, rule) => {
            rules[`jest/${rule}`] = 0;

            return rules;
        }, {}),
    }, {
        'files': testFilePatterns,
        'rules': {
            'prefer-import/prefer-import-over-require': 0,
        },
    }],
};
