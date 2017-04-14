// ECMAScript6 - http://eslint.org/docs/rules/#ecmascript-6

'use strict';

module.exports = {
    'rules': {
        // Require braces around arrow function bodies
        'arrow-body-style': [2, 'as-needed'],
        // Require parentheses around arrow function arguments
        'arrow-parens': [2, 'always'],
        // Enforce consistent spacing before and after the arrow in arrow functions
        'arrow-spacing': [2, { 'before': true, 'after': true }],
        // Require super() calls in constructors
        'constructor-super': 2,
        // Enforce consistent spacing around * operators in generator functions
        'generator-star-spacing': [2, { 'before': false, 'after': true }],
        // Disallow reassigning class members
        'no-class-assign': 2,
        // Disallow arrow functions where they could be confused with comparisons
        'no-confusing-arrow': 0,
        // Disallow reassigning const variables
        'no-const-assign': 2,
        // Disallow duplicate class members
        'no-dupe-class-members': 2,
        // Disallow duplicate module imports
        'no-duplicate-imports': 2,
        // Disallow new operators with the Symbol object
        'no-new-symbol': 2,
        // Disallow specified modules when loaded by impor
        'no-restricted-imports': 0,
        // Disallow this/super before calling super() in constructors
        'no-this-before-super': 1,
        // Disallow unnecessary computed property keys in object literals
        'no-useless-computed-key': 2,
        // Disallow unnecessary constructors
        'no-useless-constructor': 2,
        // Disallow renaming import, export, and destructured assignments to the same name
        'no-useless-rename': 2,
        // Require let or const instead of var
        'no-var': 2,
        // Require or disallow method and property shorthand syntax for object literals
        'object-shorthand': [2, 'always'],
        // Require arrow functions as callbacks
        'prefer-arrow-callback': 2,
        // Require const declarations for variables that are never reassigned after declared
        'prefer-const': 2,
        // Require destructuring from arrays and/or objects
        'prefer-destructuring': 0,
        // Disallow parseInt() in favor of binary, octal, and hexadecimal literals
        'prefer-numeric-literals': 2,
        // Require rest parameters instead of arguments
        'prefer-rest-params': 2,
        // Require spread operators instead of .apply()
        'prefer-spread': 2,
        // Require template literals instead of string concatenation
        'prefer-template': 1,
        // Require generator functions to contain yield
        'require-yield': 1,
        // Enforce spacing between rest and spread operators and their expressions
        'rest-spread-spacing': [2, 'never'],
        // Enforce sorted import declarations within modules
        'sort-imports': 0,
        // Require symbol descriptions
        'symbol-description': 0,
        // Require or disallow spacing around embedded expressions of template strings
        'template-curly-spacing': [2, 'never'],
        // Require or disallow spacing around the * in yield* expressions
        'yield-star-spacing': [2, { 'before': false, 'after': true }],
    },
};
