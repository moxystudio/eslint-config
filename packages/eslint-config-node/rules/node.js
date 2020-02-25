// Node.js & CommonJS - http://eslint.org/docs/rules/#nodejs-and-commonjs

'use strict';

module.exports = {
    'rules': {
        // Require return statements after callbacks
        'callback-return': 0,
        // Require require() calls to be placed at top-level module scope
        'global-require': 0,
        // Enforces error handling in callbacks
        'handle-callback-err': 1,
        // Disallow require calls to be mixed with regular variable declarations
        // comment: this rule only works per var and we disallow multiple variables per var, so it's disabled
        'no-mixed-requires': 0,
        // Disallow new operators with calls to require
        'no-new-require': 2,
        // Disallow string concatenation with __dirname and __filename
        'no-path-concat': 0,
        // Disallow the use of process.env
        'no-process-env': 0,
        // Disallow the use of process.exit()
        'no-process-exit': 0,
        // Disallow specified modules when loaded by require
        'no-restricted-modules': 0,
        // Disallow synchronous methods
        'no-sync': 0,
    },
};
