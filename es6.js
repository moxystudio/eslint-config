'use strict';

module.exports = {
    'extends': [
        './es5',
        './rules/es6',
    ].map(require.resolve),
    'env': {
        'es6': true,
    },
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'script',
    },
    'rules': {
        // Enforce a maximum number of statements allowed per line
        // comment: decrease to 1 because prefer arrow functions is enabled, which decreases the need to be 2
        //          [1, 2, 3, 4].map(function (x) => { return x + 1; }).find(function (x) { return x === 5; });  // ES5, needs to be 2 here
        //          [1, 2, 3, 4].map((x) => x + 1).find((x) => x === 5);  // Can be just one, no longer throws
        'max-statements-per-line': [2, { 'max': 1 }],
    },
};
