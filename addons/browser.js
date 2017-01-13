'use strict';

module.exports = {
    'env': {
        'browser': true,
        'worker': true,
        'amd': true,
        'commonjs': true,
    },
    'rules': {
        // restrict usage of specified global variables
        // comment: event is a global variable in some browsers and people often forget to define it in the args
        'no-restricted-globals': [2, 'event'],
    },
};
