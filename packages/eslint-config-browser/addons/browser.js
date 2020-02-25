'use strict';

module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
    },
    'extends': [
        '../rules/best-practices.js',
        '../rules/variables.js',
    ],
    'rules': {
        // Restrict usage of specified global variables
        // comment: event is a global variable in some browsers and people often forget to define it in the args
        'no-restricted-globals': [2, 'event'],
    },
};
