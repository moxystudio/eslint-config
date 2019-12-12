'use strict';

module.exports = {
    'parserOptions': {
        'sourceType': 'module',
    },
    'plugins': [
        'import',
    ],
    'rules': {
        // Rule to control usage of strict mode directives
        // comment: code inside es6 modules is under strict mode by default, so it's not necessary
        'strict': [2, 'never'],
        // Rule to warn the use of import when the es6-modules addon is activated.
        // comment: This should be a warning instead of an error because there are still cases when we must use require.
        'import/no-commonjs': 1,
        'import/no-amd': 1,
        'import/no-dynamic-require': [1, { 'allowConditionalRequire': false }],
    },
    'overrides': [{
        'files': './*.config.js',
        'rules': {
            'import/no-commonjs': 0,
            'import/no-amd': 0,
            'import/no-dynamic-require': [0, { 'allowConditionalRequire': true }],
        },
    }],
};
