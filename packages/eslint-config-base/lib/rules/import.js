'use strict';

module.exports = {
    rules: {
        // Last import should have a newline after
        'import/newline-after-import': ['error', { count: 1 }],
        // Order imports
        'import/order': ['error', {
            groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        }],
    },
};
