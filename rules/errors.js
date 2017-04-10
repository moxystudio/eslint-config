// Possible errors - ttp://eslint.org/docs/rules/#possible-errors

'use strict';

module.exports = {
    'rules': {
        // Disallow await inside of loops
        'no-await-in-loop': 1,
        // Disallow comparing against -0
        'no-compare-neg-zero': 2,
        // Disallow assignment operators in conditional expressions
        'no-cond-assign': [2, 'except-parens'],
        // Disallow the use of console
        // comment: disabled because console.* expressions are useful for development and should be removed by the build process
        'no-console': 0,
        // Disallow constant expressions in conditions
        'no-constant-condition': 2,
        // Disallow control characters in regular expressions
        'no-control-regex': 2,
        // Disallow the use of debugger
        // comment: just a warning by default, the build process should remove debugger statements
        'no-debugger': 1,
        // Disallow duplicate arguments in functions definitions
        'no-dupe-args': 2,
        // Disallow duplicate keys in object literals
        'no-dupe-keys': 2,
        // Disallow a duplicate case labels
        'no-duplicate-case': 2,
        // Disallow empty block statements
        'no-empty': 2,
        // Disallow the use of empty character classes in regular expressions
        'no-empty-character-class': 2,
        // Disallow reassigning exceptions in catch clauses
        'no-ex-assign': 0,
        // Disallow unnecessary boolean casts
        'no-extra-boolean-cast': 2,
        // Disallow unnecessary parentheses
        'no-extra-parens': [2, 'functions'],
        // Disallow unnecessary semicolons
        'no-extra-semi': 2,
        // Disallow reassigning function declarations
        'no-func-assign': 2,
        // Disallow variable or function declarations in nested blocks
        'no-inner-declarations': 2,
        // Disallow invalid regular expression strings in the RegExp constructor
        'no-invalid-regexp': 2,
        // Disallow irregular whitespace outside of strings and comments
        'no-irregular-whitespace': 2,
        // Disallow calling global object properties as functions
        'no-obj-calls': 2,
        // Disallow calling some Object.prototype methods directly on objects
        'no-prototype-builtins': 2,
        // Disallow multiple spaces in regular expressions
        'no-regex-spaces': 2,
        // Disallow sparse arrays
        'no-sparse-arrays': 2,
        // Disallow template literal placeholder syntax in regular strings
        'no-template-curly-in-string': 2,
        // Disallow confusing multiline expressions
        'no-unexpected-multiline': 0,
        // Disallow unreachable statements after a return, throw, continue, or break statement
        'no-unreachable': 2,
        // Disallow control flow statements in finally blocks
        'no-unsafe-finally': 2,
        // Disallow negating the left operand of relational operators
        'no-unsafe-negation': 2,
        // Require calls to isNaN() when checking for NaN
        'use-isnan': 2,
        // Enforce valid JSDoc comments
        // comment: valid-jsdoc is on the rules/jsdoc.js file
        // 'valid-jsdoc': 2,
        // Enforce comparing typeof expressions against valid strings
        'valid-typeof': 2,
    },
};
