// Best practices - http://eslint.org/docs/rules/#ecmascript-6

'use strict';

module.exports = {
    'rules': {
        // Enforce getter and setter pairs in objects
        'accessor-pairs': 0,
        // Enforce return statements in callbacks of array methods
        'array-callback-return': 2,
        // Enforce the use of variables within the scope they are defined
        'block-scoped-var': 2,
        // Enforce that class methods utilize this
        'class-methods-use-this': 0,
        // Enforce a maximum cyclomatic complexity allowed in a program
        'complexity': 0,
        // Require return statements to either always or never specify values
        'consistent-return': 0,
        // Enforce consistent brace style for all control statements
        'curly': 2,
        // Require default cases in switch statements
        'default-case': 2,
        // Enforce dot notation whenever possible
        'dot-location': [2, 'property'],
        // Encourages use of dot notation whenever possible
        'dot-notation': [2, { 'allowKeywords': true }],
        // Require the use of === and !==
        'eqeqeq': [2, 'allow-null'],
        // Require for-in loops to include an if statement
        // comment: who ever modifies Object.prototype to include enumerable properties or use for in to iterator over instances is stupid..
        'guard-for-in': 0,
        // Disallow the use of alert, confirm, and prompt
        'no-alert': 1,
        // Disallow the use of arguments.caller or arguments.callee
        'no-caller': 2,
        // Disallow lexical declarations in case clauses
        'no-case-declarations': 2,
        // Disallow division operators explicitly at beginning of regular expression
        'no-div-regex': 0,
        // Disallow else blocks after return statements in if statements
        'no-else-return': 2,
        // Disallow empty functions
        'no-empty-function': 0,
        // Disallow empty destructuring patterns
        'no-empty-pattern': 2,
        // Disallow null comparisons without type-checking operators
        'no-eq-null': 0,
        // Disallow the use of eval()
        'no-eval': 2,
        // Disallow extending native types
        'no-extend-native': 2,
        // Disallow unnecessary calls to .bind()
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
        // Disallow shorthand type conversions
        'no-implicit-coercion': 0,
        // Disallow variable and function declarations in the global scope
        'no-implicit-globals': 2,
        // Disallow the use of eval()-like methods
        'no-implied-eval': 2,
        // Disallow this keywords outside of classes or class-like objects
        'no-invalid-this': 2,
        // Disallow usage of __iterator__ property
        'no-iterator': 2,
        // Disallow labeled statements
        'no-labels': 2,
        // Disallow unnecessary nested blocks
        'no-lone-blocks': 2,
        // Disallow function declarations and expressions inside loop statements
        'no-loop-func': 2,
        // Disallow magic numbers
        'no-magic-numbers': 0,
        // Disallow multiple spaces
        'no-multi-spaces': 2,
        // Disallow multiline strings
        // comment: multiline strings are supported in IE9 and higher.. so why should one still live in 1990?
        'no-multi-str': 0,
        // Disallow new operators outside of assignments or comparisons
        'no-new': 2,
        // Disallow new operators with the Function object
        'no-new-func': 2,
        // Disallow new operators with the String, Number, and Boolean objects
        'no-new-wrappers': 2,
        // Disallow octal literals
        'no-octal': 2,
        // Disallow octal escape sequences in string literals
        'no-octal-escape': 2,
        // Disallow reassigning function parameters
        'no-param-reassign': 0,
        // Disallow the use of the __proto__ property
        'no-proto': 2,
        // Disallow variable redeclaration
        'no-redeclare': 2,
        // Disallow certain properties on certain objects
        'no-restricted-properties': [2,
            {
                'property': '__defineGetter__',
                'message': 'Please use Object.defineProperty instead.',
            },
            {
                'property': '__defineSetter__',
                'message': 'Please use Object.defineProperty instead.',
            },
        ],
        // Disallow assignment operators in return statements
        'no-return-assign': 2,
        // Disallow unnecessary return await
        'no-return-await': 2,
        // Disallow javascript: urls
        'no-script-url': 2,
        // Disallow assignments where both sides are exactly the same
        'no-self-assign': 2,
        // Disallow comparisons where both sides are exactly the same
        'no-self-compare': 2,
        // Disallow comma operators
        'no-sequences': 2,
        // Disallow throwing literals as exceptions
        'no-throw-literal': 2,
        // Disallow unmodified loop conditions
        'no-unmodified-loop-condition': 2,
        // Disallow unused expressions
        'no-unused-expressions': [2, { 'allowShortCircuit': true }],
        // Disallow unused labels
        'no-unused-labels': 2,
        // Disallow unnecessary calls to .call() and .apply()
        'no-useless-call': 2,
        // Disallow unnecessary concatenation of literals or template literals
        'no-useless-concat': 2,
        // Disallow unnecessary escape characters
        'no-useless-escape': 2,
        // Disallow redundant return statements
        'no-useless-return': 2,
        // Disallow void operators
        'no-void': 2,
        // Disallow specified warning terms in comments
        'no-warning-comments': 1,
        // Disallow with statements
        'no-with': 2,
        // Require using Error objects as Promise rejection reasons
        'prefer-promise-reject-errors': 2,
        // Enforce the consistent use of the radix argument when using parseInt()
        'radix': 2,
        // Disallow async functions which have no await expression
        'require-await': 2,
        // Require var declarations be placed at the top of their containing scope
        'vars-on-top': 2,
        // Require parentheses around immediate function invocations
        'wrap-iife': [2, 'inside'],
        // Require or disallow Yoda conditions
        'yoda': 2,
    },
};
