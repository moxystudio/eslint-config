'use strict';

// TODO: add a plugin to add support for 'prefer-import' to give preference on import over require
//       see: https://github.com/eslint/eslint/issues/3902

module.exports = {
    'parserOptions': {
        'sourceType': 'module',
    },
    'rules': {
        // rule to control usage of strict mode directives
        // comment: code inside es6 modules is under strict mode by default, so it's not necessary
        'strict': 0,
        // enforce require() on top-level module scope
        // comment: since we are using es6 modules, one will be using import instead of require
        'global-require': 0,
    },
};
