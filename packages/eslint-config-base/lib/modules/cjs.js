'use strict';

module.exports = {
    env: {
        commonjs: true,
    },
    parserOptions: {
        sourceType: 'script',
    },
    rules: {
        // Report AMD require and define calls
        'import/no-amd': 'error',
        // Report CommonJS require calls and module.exports or exports.*
        'import/no-commonjs': 'off',
    },
};
