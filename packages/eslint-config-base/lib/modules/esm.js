'use strict';

module.exports = {
    parserOptions: {
        sourceType: 'module',
    },
    rules: {
        // Report AMD require and define calls
        'import/no-amd': 'error',
        // Report CommonJS require calls and module.exports or exports.*
        'import/no-commonjs': ['error', { allowConditionalRequire: false }],
        // Order imports
        'import/order': ['error', {
            groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        }],
        // Imports should be at top of the module
        'import/first': 'error',
        // Last import sould have a newline after
        'import/newline-after-import': ['error', { count: 1 }],
    },
};
