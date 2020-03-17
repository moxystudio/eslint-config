// Variables - http://eslint.org/docs/rules/#variables

'use strict';

module.exports = {
    'rules': {
        // Disallow identifiers from shadowing restricted names
        'no-shadow-restricted-names': 'error',
        // Disallow the use of undeclared variables unless mentioned in /*global */ comments
        'no-undef': 'error',
        // Disallow initializing variables to undefined
        'no-undef-init': 'error',
        // Disallow unused variables
        'no-unused-vars': ['error', { 'vars': 'local', 'args': 'after-used', 'ignoreRestSiblings': true }],
        // Disallow the use of variables before they are defined
        'no-use-before-define': ['error', {
            'functions': false, // Completly disable for functions.. it feels weird
            'classes': false, // Disable for classes but still checks in the same scope
            'variables': false, // Disable for variables but still checks in the same scope
        }],
    },
};
