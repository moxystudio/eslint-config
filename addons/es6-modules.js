'use strict';

module.exports = {
    'parserOptions': {
        'sourceType': 'module',
    },
    'plugins': [
        'prefer-import',
    ],
    'rules': {
        // Rule to control usage of strict mode directives
        // comment: code inside es6 modules is under strict mode by default, so it's not necessary
        'strict': [2, 'never'],
        // Enforce require() on top-level module scope
        // comment: since we are using es6 modules, one will be using import instead of require but we still allow using inline require
        'global-require': 0,
        // Rule to warn the use of import when the es6-modules addon is activated.
        // comment: This should be a warning instead of an error because there are still cases when we must use require.
        'prefer-import/prefer-import-over-require': 1,
    },
};
