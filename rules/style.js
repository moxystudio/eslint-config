// Stylistic issues - http://eslint.org/docs/rules/#stylistic-issues

'use strict';

module.exports = {
    'rules': {
        // Enforce spacing inside array brackets
        'array-bracket-spacing': [2, 'never'],
        // Disallow or enforce spaces inside of single line blocks
        'block-spacing': 2,
        // Enforce consistent brace style for blocks
        'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
        // Require camel case names
        'camelcase': 2,
        // Enforce or disallow capitalization of the first letter of a comment
        'capitalized-comments': [2, 'always', {
            'ignorePattern': '([a-z0-9]+[_\\-.()]|falls?\\s?through)',  // Ignore comments that have possible code samples as the first word (some-prop, fn(), etc.)
            'ignoreInlineComments': true,
            'ignoreConsecutiveComments': true,
        }],
        // Disallow trailing commas in object literals
        'comma-dangle': [2, 'always-multiline'],
        // Enforce spacing before and after comma
        'comma-spacing': [2, { 'before': false, 'after': true }],
        // Enforce one true comma style
        'comma-style': [2, 'last'],
        // Disallow padding inside computed properties
        'computed-property-spacing': [2, 'never'],
        // Enforces consistent naming when capturing the current execution context
        'consistent-this': [2, 'that'],
        // Enforce newline at the end of file, with no multiple empty lines
        'eol-last': 2,
        // Require or disallow spacing between function identifiers and their invocations
        'func-call-spacing': [2, 'never'],
        // Require function names to match the name of the variable or property to which they are assigned
        'func-name-matching': 0,
        // Require function expressions to have a name
        'func-names': 0,
        // Enforces use of function declarations or expressions
        'func-style': 0,
        // Disallow specified identifiers
        'id-blacklist': 0,
        // This option enforces minimum and maximum identifier lengths (variable names, property names etc.)
        'id-length': 0,
        // Require identifiers to match the provided regular expression
        'id-match': 0,
        // This option sets a specific tab width for your code
        'indent': [2, 4, {
            'SwitchCase': 0,
            'VariableDeclarator': 1,
            'MemberExpression': 0,
            'FunctionDeclaration': { 'body': 1, 'parameters': 1 },
            'CallExpression': { 'arguments': 1 },
        }],
        // Specify whether double or single quotes should be used in JSX attributes
        'jsx-quotes': [2, 'prefer-double'],
        // Enforces spacing between keys and values in object literal properties
        'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
        // Enforce spacing before and after keywords
        'keyword-spacing': 2,
        // Enforce position of line comments
        'line-comment-position': 0,
        // Disallow mixed 'LF' and 'CRLF' as linebreaks
        'linebreak-style': [2, 'unix'],
        // Enforces empty lines around comments
        // comment: I would like to use this but the rule is very restrictive.. it lacks some flexibility
        'lines-around-comment': 0,
        // Require or disallow newlines around directives
        'lines-around-directive': [2, {
            'before': 'always',  // Enable because if there's a comment at the top of the file, it needs a blank line before the 'use strict'
            'after': 'always',
        }],
        // Specify the maximum depth that blocks can be nested
        'max-depth': [1, 6],
        // Specify the maximum length of a line in your program
        'max-len': [1, { 'code': 140, 'tabWidth': 4, 'ignoreTrailingComments': true, 'ignoreUrls': true }],
        // Enforce a maximum number of lines per file
        'max-lines': [1, { 'max': 1000, 'skipComments': true, 'skipBlankLines': false }],
        // Specify the maximum depth callbacks can be nested
        'max-nested-callbacks': [1, 6],
        // Limits the number of parameters that can be used in the function declaration.
        'max-params': [1, 6],
        // Specify the maximum number of statement allowed in a function
        'max-statements': [1, 140],
        // Enforce a maximum number of statements allowed per line
        'max-statements-per-line': [2, { 'max': 2 }],
        // Enforce newlines between operands of ternary expressions
        'multiline-ternary': 0,
        // Require a capital letter for constructors
        'new-cap': [2, { 'newIsCap': true }],
        // Disallow the omission of parentheses when invoking a constructor with no arguments
        'new-parens': 2,
        // Allow/disallow an empty newline after var statement
        'newline-after-var': [2, 'always'],
        // Require newline before return statement
        'newline-before-return': 2,
        // Enforce newline after each call when chaining the calls
        'newline-per-chained-call': [1, { 'ignoreChainWithDepth': 2 }],
        // Disallow use of the Array constructor
        'no-array-constructor': 2,
        // Disallow use of bitwise operators
        'no-bitwise': 2,
        // Disallow use of the continue statement
        'no-continue': 0,
        // Disallow comments inline after code
        'no-inline-comments': 0,
        // Disallow if as the only statement in an else block
        'no-lonely-if': 2,
        // Disallow if statements as the only statement in else blocks
        'no-mixed-operators': 2,
        // Disallow mixed spaces and tabs for indentation
        'no-mixed-spaces-and-tabs': 2,
        // Disallow use of chained assignment expressions
        'no-multi-assign': 0,
        // Disallow multiple empty lines and only one newline at the end
        'no-multiple-empty-lines': [2, { 'max': 1, 'maxBOF': 0 }],
        // Disallow negated conditions
        'no-negated-condition': 0,
        // Disallow nested ternary expressions
        'no-nested-ternary': 2,
        // Disallow use of the Object constructor
        'no-new-object': 2,
        // Disallow use of unary operators, ++ and --
        'no-plusplus': 2,
        // Disallow use of certain syntax in code
        'no-restricted-syntax': 0,
        // Disallow all tabs
        'no-tabs': 2,
        // Disallow the use of ternary operators
        'no-ternary': 0,
        // Disallow trailing whitespace at the end of lines
        'no-trailing-spaces': 2,
        // Disallow dangling underscores in identifiers
        'no-underscore-dangle': 0,
        // Disallow the use of Boolean literals in conditional expressions
        'no-unneeded-ternary': 2,
        // Disallow whitespace before properties
        'no-whitespace-before-property': 2,
        // Enforce the location of single-line statements
        // comment: brackets are always required, so this rule is unnecessary
        'nonblock-statement-body-position': 0,
        // Enforce consistent line breaks inside braces
        // comment: can't enable because it doesn't allow a lonely property to be in a new line
        'object-curly-newline': [0, { 'multiline': true, 'minProperties': 0 }],
        // Require padding inside curly braces
        'object-curly-spacing': [2, 'always'],
        // Enforce placing object properties on separate lines
        'object-property-newline': 0,
        // Allow just one var statement per function
        'one-var': [2, 'never'],
        // Require or disallow an newline around variable declarations
        'one-var-declaration-per-line': [2, 'always'],
        // Require assignment operator shorthand where possible or prohibit it entirely
        'operator-assignment': 0,
        // Enforce operators to be placed before or after line breaks
        'operator-linebreak': [2, 'after'],
        // Enforce padding within blocks
        'padded-blocks': [2, 'never'],
        // Require quotes around object literal property names
        'quote-props': [2, 'as-needed'],
        // Specify whether double or single quotes should be used
        'quotes': [2, 'single', 'avoid-escape'],
        // Require JSDoc comment
        'require-jsdoc': 0,
        // Require or disallow use of semicolons instead of ASI
        'semi': [2, 'always'],
        // Enforce spacing before and after semicolons
        'semi-spacing': [2, { 'before': false, 'after': true }],
        // Require object keys to be sorted
        'sort-keys': 0,
        // Sort variables within the same declaration block
        'sort-vars': 0,
        // Require or disallow space before blocks
        'space-before-blocks': 2,
        // Require or disallow space before function opening parenthesis
        'space-before-function-paren': [2, { 'anonymous': 'always', 'named': 'never' }],
        // Require or disallow spaces inside parentheses
        'space-in-parens': [2, 'never'],
        // Require spaces around operators
        'space-infix-ops': 2,
        // Require or disallow spaces before/after unary operators
        'space-unary-ops': 2,
        // Require or disallow a space immediately following the // or /* in a comment
        'spaced-comment': [2, 'always', {
            'exceptions': ['-', '+'],
            'markers': ['=', '!'],                     // Space here to support sprockets directives
        }],
        // Require or disallow spacing between template tags and their literals
        'template-tag-spacing': [2, 'never'],
        // Require or disallow Unicode byte order mark (BOM)
        'unicode-bom': [2, 'never'],
        // Require regex literals to be wrapped in parentheses
        'wrap-regex': 0,
    },
};
