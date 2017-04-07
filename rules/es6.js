// ECMAScript6 - http://eslint.org/docs/rules/#ecmascript-6

'use strict';

module.exports = {
    'rules': {
        // Require braces in arrow function body
        'arrow-body-style': [2, 'as-needed'],
        // Require parens in arrow function arguments
        'arrow-parens': [2, 'always'],
        // Require space before/after arrow function's arrow
        'arrow-spacing': [2, { 'before': true, 'after': true }],
        // Verify super() callings in constructors
        'constructor-super': 2,
        // Enforce the spacing around the * in generator functions
        'generator-star-spacing': [2, { 'before': false, 'after': true }],
        // Disallow modifying variables of class declarations
        'no-class-assign': 2,
        // Disallow arrow functions where they could be confused with comparisons
        'no-confusing-arrow': 0,
        // Disallow modifying variables that are declared using const
        'no-const-assign': 2,
        // Disallow duplicate name in class members
        'no-dupe-class-members': 2,
        // Disallow duplicate module imports
        'no-duplicate-imports': 2,
        // Disallow use of the new operator with the Symbol object
        'no-new-symbol': 2,
        // Disallow specified modules when loaded by import
        'no-restricted-imports': 0,
        // Disallow to use this/super before super() calling in constructors.
        'no-this-before-super': 1,
        // Disallow unnecessary computed property keys in object literals
        'no-useless-computed-key': 2,
        // Disallow unnecessary constructor
        'no-useless-constructor': 2,
        // Disallow renaming import, export, and destructured assignments to the same name
        'no-useless-rename': 2,
        // Require let or const instead of var
        'no-var': 2,
        // Require method and property shorthand syntax for object literals
        'object-shorthand': [2, 'always'],
        // Suggest using arrow functions as callbacks
        'prefer-arrow-callback': 2,
        // Suggest using of const declaration for variables that are never modified after declared
        'prefer-const': 2,
        // Require destructuring from arrays and/or objects
        'prefer-destructuring': 0,
        // Disallow parseInt() in favor of binary, octal, and hexadecimal literals
        'prefer-numeric-literals': 2,
        // Suggest using the rest parameters instead of arguments
        'prefer-rest-params': 2,
        // Suggest using the spread operator instead of .apply()
        'prefer-spread': 2,
        // Suggest using template literals instead of strings concatenation
        'prefer-template': 1,
        // Disallow generator functions that do not have yield
        'require-yield': 1,
        // Enforce spacing between rest and spread operators and their expressions
        'rest-spread-spacing': [2, 'never'],
        // Sort import declarations within module
        'sort-imports': 0,
        // Require symbol descriptions
        'symbol-description': 0,
        // Enforce spacing around embedded expressions of template strings
        'template-curly-spacing': [2, 'never'],
        // Enforce spacing around the * in yield* expressions
        'yield-star-spacing': [2, { 'before': false, 'after': true }],
    },
};
