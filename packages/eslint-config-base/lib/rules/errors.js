// Possible errors - ttp://eslint.org/docs/rules/#possible-errors

'use strict';

module.exports = {
    rules: {
        // Disallow await inside of loops
        'no-await-in-loop': 'warn',
        // Disallow comparing against -0
        'no-compare-neg-zero': 'error',
        // Disallow assignment operators in conditional expressions
        'no-cond-assign': ['error', 'except-parens'],
        // Disallow constant expressions in conditions
        'no-constant-condition': 'error',
        // Disallow control characters in regular expressions
        'no-control-regex': 'error',
        // Disallow the use of debugger
        // comment: just a warning by default, the build process should remove debugger statements
        'no-debugger': 'warn',
        // Disallow duplicate keys in object literals
        'no-dupe-keys': 'error',
        // Disallow a duplicate case labels
        'no-duplicate-case': 'error',
        // Disallow empty block statements
        'no-empty': 'error',
        // Disallow the use of empty character classes in regular expressions
        'no-empty-character-class': 'error',
        // Disallow unnecessary boolean casts
        'no-extra-boolean-cast': 'error',
        // Disallow unnecessary parentheses
        'no-extra-parens': ['error', 'functions'],
        // Disallow unnecessary semicolons
        'no-extra-semi': 'error',
        // Disallow reassigning function declarations
        'no-func-assign': 'error',
        // Disallow variable or function declarations in nested blocks
        'no-inner-declarations': 'error',
        // Disallow invalid regular expression strings in the RegExp constructor
        'no-invalid-regexp': 'error',
        // Disallow irregular whitespace outside of strings and comments
        'no-irregular-whitespace': 'error',
        // Disallow calling global object properties as functions
        'no-obj-calls': 'error',
        // Disallow calling some Object.prototype methods directly on objects
        'no-prototype-builtins': 'error',
        // Disallow multiple spaces in regular expressions
        'no-regex-spaces': 'error',
        // Disallow sparse arrays
        'no-sparse-arrays': 'error',
        // Disallow template literal placeholder syntax in regular strings
        'no-template-curly-in-string': 'error',
        // Disallow unreachable statements after a return, throw, continue, or break statement
        'no-unreachable': 'error',
        // Disallow control flow statements in finally blocks
        'no-unsafe-finally': 'error',
        // Disallow negating the left operand of relational operators
        'no-unsafe-negation': 'error',
        // Require calls to isNaN() when checking for NaN
        'use-isnan': 'error',
        // Enforce comparing typeof expressions against valid strings
        'valid-typeof': 'error',
    },
};
