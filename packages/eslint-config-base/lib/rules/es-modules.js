'use strict';

module.exports = {
    'parserOptions': {
        'sourceType': 'module',
    },
    'rules': {
        // Report AMD require and define calls
        'import/no-amd': 'error',
        // Report CommonJS require calls and module.exports or exports.*
        'import/no-commonjs': ['error', { 'allowConditionalRequire': false }],
    },
};
