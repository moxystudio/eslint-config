// Variables - http://eslint.org/docs/rules/#variables

'use strict';

module.exports = {
    'rules': {
        // Require or disallow initialization in variable declarations
        'init-declarations': 0,
        // Disallow catch clause parameters from shadowing variables in the outer scope
        'no-catch-shadow': 0,
        // Disallow deleting variables
        'no-delete-var': 2,
        // Disallow labels that share a name with a variable
        'no-label-var': 2,
        // Disallow specified global variables
        'no-restricted-globals': 0,
        // Disallow variable declarations from shadowing variables declared in the outer scope
        'no-shadow': 0,
        // Disallow identifiers from shadowing restricted names
        'no-shadow-restricted-names': 2,
        // Disallow the use of undeclared variables unless mentioned in /*global */ comments
        'no-undef': 2,
        // Disallow initializing variables to undefined
        'no-undef-init': 2,
        // Disallow use of undefined as an identifier
        'no-undefined': 0,
        // Disallow unused variables
        'no-unused-vars': [2, { 'vars': 'local', 'args': 'after-used', 'ignoreRestSiblings': true }],
        // Disallow the use of variables before they are defined
        'no-use-before-define': [2, {
            'functions': false, // Completly disable for functions.. it feels weird
            'classes': false, // Disable for classes but still checks in the same scope
            'variables': false, // Disable for variables but still checks in the same scope
        }],
    },
};
