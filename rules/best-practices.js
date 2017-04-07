// Best practices - http://eslint.org/docs/rules/#ecmascript-6

'use strict';

module.exports = {
    'rules': {
        // Enforces getter/setter pairs in objects
        'accessor-pairs': 0,
        // Enforces return statements in callbacks of array's methods
        'array-callback-return': 2,
        // Treat var statements as if they were block scoped
        'block-scoped-var': 2,
        // Enforce that class methods utilize this
        'class-methods-use-this': 0,
        // Specify the maximum cyclomatic complexity allowed in a program
        'complexity': 0,
        // Require return statements to either always or never specify values
        'consistent-return': 0,
        // Specify curly brace conventions for all control statements
        'curly': 2,
        // Require default case in switch statements
        'default-case': 2,
        // Enforces consistent newlines before or after dots
        'dot-location': [2, 'property'],
        // Encourages use of dot notation whenever possible
        'dot-notation': [2, { 'allowKeywords': true }],
        // Require the use of === and !==
        'eqeqeq': [2, 'allow-null'],
        // Require for-in loops to include an if statementR
        // comment: who ever modifies Object.prototype to include enumerable properties or use for in to iterator over instances is stupid..
        'guard-for-in': 0,
        // Disallow the use of alert, confirm, and prompt
        'no-alert': 1,
        // Disallow use of arguments.caller or arguments.callee
        'no-caller': 2,
        // Disallow lexical declarations in case clauses
        'no-case-declarations': 2,
        // Disallow division operators explicitly at beginning of regular expression
        'no-div-regex': 0,
        // Disallow else after a return in an if
        'no-else-return': 2,
        // Disallow use of empty functions
        'no-empty-function': 0,
        // Disallow use of empty destructuring patterns
        'no-empty-pattern': 2,
        // Disallow comparisons to null without a type-checking operator
        'no-eq-null': 0,
        // Disallow use of eval()
        'no-eval': 2,
        // Disallow adding to native types
        'no-extend-native': 2,
        // Disallow unnecessary function binding
        'no-extra-bind': 2,
        // Disallow unnecessary labels
        'no-extra-label': 2,
        // Disallow fallthrough of case statements
        // comment: while it is not allowed, it can still be allowed if you comment with "falls through"
        'no-fallthrough': 2,
        // Disallow the use of leading or trailing decimal points in numeric literals
        'no-floating-decimal': 2,
        // Disallow assignments to native objects or read-only global variables
        'no-global-assign': 2,
        // Disallow the type conversions with shorter notations
        'no-implicit-coercion': 0,
        // Disallow var and named functions in global scope
        'no-implicit-globals': 2,
        // Disallow use of eval()-like methods
        'no-implied-eval': 2,
        // Disallow this keywords outside of classes or class-like objects
        'no-invalid-this': 2,
        // Disallow usage of __iterator__ property
        'no-iterator': 2,
        // Disallow use of labeled statements
        'no-labels': 2,
        // Disallow unnecessary nested blocks
        'no-lone-blocks': 2,
        // Disallow creation of functions within loops
        'no-loop-func': 2,
        // Disallow the use of magic numbers
        'no-magic-numbers': 0,
        // Disallow use of multiple spaces
        'no-multi-spaces': 2,
        // Disallow use of multiline strings
        // comment: multiline strings are supported in IE9 and higher.. so why should one still live in 1990?
        'no-multi-str': 0,
        // Disallow use of new operator when not part of the assignment or comparison
        'no-new': 2,
        // Disallow new operators with the Function object
        'no-new-func': 2,
        // Disallow new operators with the String, Number, and Boolean objects
        'no-new-wrappers': 2,
        // Disallow use of (old style) octal literals
        'no-octal': 2,
        // Disallow use of octal escape sequences in string literals, such as var foo = 'Copyright \251';
        'no-octal-escape': 2,
        // Disallow reassignment of function parameters
        'no-param-reassign': 0,
        // Disallow usage of __proto__ property
        'no-proto': 2,
        // Disallow declaring the same variable more then once
        'no-redeclare': 2,
        // Disallow certain properties on certain objects
        'no-restricted-properties': 0,
        // Disallow use of assignment in return statement
        'no-return-assign': 2,
        // Disallow assignment operators in return statements
        'no-return-await': 2,
        // Disallow use of `javascript:` urls.
        'no-script-url': 2,
        // Disallow assignments where both sides are exactly the same
        'no-self-assign': 2,
        // Disallow comparisons where both sides are exactly the same
        'no-self-compare': 2,
        // Disallow use of comma operator
        'no-sequences': 2,
        // Restrict what can be thrown as an exception
        'no-throw-literal': 2,
        // Disallow unmodified conditions of loops
        'no-unmodified-loop-condition': 2,
        // Disallow usage of expressions in statement position
        'no-unused-expressions': [2, { 'allowShortCircuit': true }],
        // Disallow unused labels
        'no-unused-labels': 2,
        // Disallow unnecessary .call() and .apply()
        'no-useless-call': 2,
        // Disallow unnecessary concatenation of literals or template literals
        'no-useless-concat': 2,
        // Disallow unnecessary escape characters
        'no-useless-escape': 2,
        // Disallow redundant return statements
        'no-useless-return': 2,
        // Disallow use of void operator
        'no-void': 2,
        // Disallow usage of configurable warning terms in comments: e.g. todo
        'no-warning-comments': 1,
        // Disallow use of the with statement
        'no-with': 2,
        // Require using Error objects as Promise rejection reasons
        'prefer-promise-reject-errors': 2,
        // Require use of the second argument for parseInt()
        'radix': 2,
        // Disallow async functions which have no await expression
        'require-await': 2,
        // Requires to declare all vars on top of their containing scope
        'vars-on-top': 2,
        // Require immediate function invocation to be wrapped in parentheses
        'wrap-iife': [2, 'inside'],
        // Require or disallow Yoda conditions
        'yoda': 2,
    },
};
