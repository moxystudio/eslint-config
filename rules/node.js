// Node.js & CommonJS - http://eslint.org/docs/rules/#nodejs-and-commonjs

'use strict';

module.exports = {
    'rules': {
        // Enforce return after a callback
        'callback-return': 1,
        // Enforce require() on top-level module scope
        'global-require': 1,
        // Enforces error handling in callbacks
        'handle-callback-err': 1,
        // Disallow mixing regular variable and require declarations
        'no-mixed-requires': [2, { 'grouping': true }],
        // Disallow use of new operator with the require function
        'no-new-require': 2,
        // Disallow string concatenation with __dirname and __filename
        'no-path-concat': 0,
        // Disallow use of process.env
        'no-process-env': 0,
        // Disallow process.exit()
        'no-process-exit': 0,
        // Restrict usage of specified node modules
        'no-restricted-modules': 0,
        // Disallow use of synchronous methods
        'no-sync': 0,
    },
};
