// Best practices - http://eslint.org/docs/rules/#ecmascript-6

'use strict';

module.exports = {
    'rules': {
        // Enforce return statements in callbacks of array methods
        'array-callback-return': 'error',
        // Enforce consistent brace style for all control statements
        'curly': 'error',
        // Require default cases in switch statements
        'default-case': 'error',
        // Enforce dot notation whenever possible
        'dot-location': ['error', 'property'],
        // Encourages use of dot notation whenever possible
        'dot-notation': ['error', { 'allowKeywords': true }],
        // Require the use of === and !==
        'eqeqeq': ['error', 'allow-null'],
        // Disallow the use of arguments.caller or arguments.callee
        'no-caller': 'error',
        // Disallow lexical declarations in case clauses
        'no-case-declarations': 'error',
        // Disallow else blocks after return statements in if statements
        'no-else-return': 'error',
        // Disallow empty destructuring patterns
        'no-empty-pattern': 'error',
        // Disallow the use of eval()
        'no-eval': 'error',
        // Disallow extending native types
        'no-extend-native': 'error',
        // Disallow unnecessary calls to .bind()
        'no-extra-bind': 'error',
        // Disallow fallthrough of case statements
        // comment: while it is not allowed, it can still be allowed if you comment with "falls through"
        'no-fallthrough': 'error',
        // Disallow the use of leading or trailing decimal points in numeric literals
        'no-floating-decimal': 'error',
        // Disallow assignments to native objects or read-only global variables
        'no-global-assign': 'error',
        // Disallow variable and function declarations in the global scope
        'no-implicit-globals': ['error', { 'lexicalBindings': true }],
        // Disallow the use of eval()-like methods
        'no-implied-eval': 'error',
        // Disallow this keywords outside of classes or class-like objects
        'no-invalid-this': 'error',
        // Disallow usage of __iterator__ property
        'no-iterator': 'error',
        // Disallow labeled statements
        'no-labels': 'error',
        // Disallow unnecessary nested blocks
        'no-lone-blocks': 'error',
        // Disallow function declarations and expressions inside loop statements
        'no-loop-func': 'error',
        // Disallow multiple spaces
        'no-multi-spaces': 'error',
        // Disallow new operators outside of assignments or comparisons
        'no-new': 'error',
        // Disallow new operators with the Function object
        'no-new-func': 'error',
        // Disallow new operators with the String, Number, and Boolean objects
        'no-new-wrappers': 'error',
        // Disallow the use of the __proto__ property
        'no-proto': 'error',
        // Disallow certain properties on certain objects
        'no-restricted-properties': ['error',
            {
                'property': '__defineGetter__',
                'message': 'Please use Object.defineProperty instead.',
            },
            {
                'property': '__defineSetter__',
                'message': 'Please use Object.defineProperty instead.',
            },
        ],
        // Disallow the use of `alert`, `confirm`, and `prompt`
        'no-alert': 'error',
        // Disallow assignment operators in return statements
        'no-return-assign': 'error',
        // Disallow unnecessary return await
        'no-return-await': 'error',
        // Disallow javascript: urls
        'no-script-url': 'error',
        // Disallow assignments where both sides are exactly the same
        'no-self-assign': 'error',
        // Disallow comparisons where both sides are exactly the same
        'no-self-compare': 'error',
        // Disallow comma operators
        'no-sequences': 'error',
        // Disallow throwing literals as exceptions
        'no-throw-literal': 'error',
        // Disallow unmodified loop conditions
        'no-unmodified-loop-condition': 'error',
        // Disallow unused expressions
        'no-unused-expressions': ['error', { 'allowShortCircuit': true }],
        // Disallow unnecessary calls to .call() and .apply()
        'no-useless-call': 'error',
        // Disallow unnecessary `catch` clauses
        'no-useless-catch': 'error',
        // Disallow unnecessary concatenation of literals or template literals
        'no-useless-concat': 'error',
        // Disallow unnecessary escape characters
        'no-useless-escape': 'error',
        // Disallow redundant return statements
        'no-useless-return': 'error',
        // Disallow void operators
        'no-void': 'error',
        // Disallow specified warning terms in comments
        'no-warning-comments': 'warn',
        // Require using Error objects as Promise rejection reasons
        'prefer-promise-reject-errors': 'error',
        // Enforce the consistent use of the radix argument when using parseInt()
        'radix': 'error',
        // Require parentheses around immediate function invocations
        'wrap-iife': ['error', 'inside'],
        // Require or disallow Yoda conditions
        'yoda': 'error',
    },
};
