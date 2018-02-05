'use strict';

module.exports = {
    'parserOptions': {
        'sourceType': 'module',
    },
    'rules': {
        // Rule to control usage of strict mode directives
        // comment: code inside es6 modules is under strict mode by default, so it's not necessary
        'strict': [2, 'never'],
        // Enforce require() on top-level module scope
        // comment: since we are using es6 modules, one will be using import instead of require but we still allow using inline require
        'global-require': 0,
    },
};
