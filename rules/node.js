// eslint - Node.js & CommonJS

'use strict';

module.exports = {
    'rules': {
        // enforce return after a callback
        'callback-return': 1,
        // enforce require() on top-level module scope
        'global-require': 1,
        // enforces error handling in callbacks
        'handle-callback-err': 1,
        // disallow mixing regular variable and require declarations
        'no-mixed-requires': [2, { 'grouping': true }],
        // disallow use of new operator with the require function
        'no-new-require': 0,
        // disallow string concatenation with __dirname and __filename
        'no-path-concat': 0,
        // disallow process.exit()
        'no-process-exit': 0,
        // restrict usage of specified node modules
        'no-restricted-modules': 0,
        // disallow use of synchronous methods
        'no-sync': 0,
    },
};
