'use strict';

var jestPlugin = require('eslint-plugin-jest');

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
        'excludedFiles': [
            '**/__tests__/**/*.js',
            '**/?(*.)@(spec|test).js',
            'test?(s)/**/*.js',
        ],
        // Disable all rules provided by Jest plugin
        'rules': Object.keys(jestPlugin.rules).reduce(function (rules, rule) {
            rules['jest/' + rule] = 0;

            return rules;
        }, {}),
    }],
};
