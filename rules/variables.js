// Variables - http://eslint.org/docs/rules/#variables

'use strict';

module.exports = {
    'rules': {
        // Enforce or disallow variable initializations at definition
        'init-declarations': 0,
        // Disallow the catch clause parameter name being the same as a variable in the outer scope
        'no-catch-shadow': 0,
        // Disallow deletion of variables
        'no-delete-var': 2,
        // Disallow labels that share a name with a variable
        'no-label-var': 2,
        // Restrict usage of specified global variables
        'no-restricted-globals': 0,
        // Disallow declaration of variables already declared in the outer scope
        'no-shadow': 0,
        // Disallow shadowing of names such as arguments
        'no-shadow-restricted-names': 2,
        // Disallow use of undeclared variables unless mentioned in a /*global */ block
        'no-undef': 2,
        // Disallow use of undefined when initializing variables
        'no-undef-init': 2,
        // Disallow use of undefined variable
        'no-undefined': 0,
        // Disallow declaration of variables that are not used in the code
        'no-unused-vars': [2, { 'vars': 'local', 'args': 'after-used' }],
        // Disallow use of variables before they are defined
        'no-use-before-define': [2, {
            'functions': false,  // Completly disable for functions.. it feels weird
            'classes': false,  // Disable for classes but still checks in the same scope
            'variables': false,  // Disable for variables but still checks in the same scope
        }],
    },
};
