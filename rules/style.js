// Stylistic issues - http://eslint.org/docs/rules/#stylistic-issues

'use strict';

module.exports = {
    'rules': {
        // Enforce consistent spacing inside array brackets
        'array-bracket-spacing': [2, 'never'],
        // Enforce consistent spacing inside single-line blocks
        'block-spacing': 2,
        // Enforce consistent brace style for blocks
        'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
        // Enforce camelcase naming convention
        'camelcase': 2,
        // Enforce or disallow capitalization of the first letter of a comment
        'capitalized-comments': [2, 'always', {
            'ignorePattern': [
                // Ignore comments that have possible code samples as the first word (camelCase, some-prop, fn(), etc.)
                '[a-z0-9]+[A-Z_\\-.()\'"`]',
                // Ignore `falls through` because of switch statements
                'falls?\\s?through',
                // Ignore language reserved keywords to allow commenting code
                'async',
                'await',
                'break',
                'case',
                'class',
                'const',
                'continue',
                'debugger',
                'delete',
                'do',
                'else',
                'export',
                'exports',
                'finally',
                'for',
                'function',
                'if',
                'import',
                'instanceof',
                'let',
                'return',
                'super',
                'switch',
                'this',
                'throw',
                'try',
                'typeof',
                'var',
                'while',
                'yield',
            ].join('|'),
            'ignoreConsecutiveComments': true,
        }],
        // Require or disallow trailing commas
        'comma-dangle': [2, 'always-multiline'],
        // Enforce consistent spacing before and after commas
        'comma-spacing': [2, { 'before': false, 'after': true }],
        // Enforce consistent comma style
        'comma-style': [2, 'last'],
        // Enforce consistent spacing inside computed property brackets
        'computed-property-spacing': [2, 'never'],
        // Enforce consistent naming when capturing the current execution context
        'consistent-this': [2, 'that'],
        // Require or disallow newline at the end of files
        'eol-last': 2,
        // Require or disallow spacing between function identifiers and their invocations
        'func-call-spacing': [2, 'never'],
        // Require function names to match the name of the variable or property to which they are assigned
        'func-name-matching': 0,
        // Require or disallow named function expressions
        'func-names': 0,
        // Enforce the consistent use of either function declarations or expressions
        'func-style': [2, 'declaration', { 'allowArrowFunctions': true }],
        // Disallow specified identifiers
        'id-blacklist': 0,
        // Enforce minimum and maximum identifier lengths
        'id-length': 0,
        // Require identifiers to match a specified regular expression
        'id-match': 0,
        // Enforce consistent indentation
        'indent': [2, 4, {
            'SwitchCase': 0,
            'VariableDeclarator': 1,
            'MemberExpression': 0,
            'FunctionDeclaration': { 'body': 1, 'parameters': 1 },
            'CallExpression': { 'arguments': 1 },
            'ignoredNodes': ['TemplateLiteral > *'],
        }],
        // Enforce the consistent use of either double or single quotes in JSX attributes
        'jsx-quotes': [2, 'prefer-double'],
        // Enforce consistent spacing between keys and values in object literal properties
        'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
        // Enforce consistent spacing before and after keywords
        'keyword-spacing': 2,
        // Enforce position of line comments
        'line-comment-position': 0,
        // Enforce consistent linebreak style
        'linebreak-style': [2, 'unix'],
        // Require empty lines around comments
        // comment: I would like to use this but the rule is very restrictive.. it lacks some flexibility
        'lines-around-comment': 0,
        // Require or disallow newlines around directives
        'lines-around-directive': [2, {
            'before': 'always', // Enable because if there's a comment at the top of the file, it needs a blank line before the 'use strict'
            'after': 'always',
        }],
        // Enforce a maximum depth that blocks can be nested
        'max-depth': [1, 6],
        // Enforce a maximum line length
        'max-len': [1, { 'code': 140, 'tabWidth': 4, 'ignoreTrailingComments': true, 'ignoreUrls': true, 'ignoreTemplateLiterals': true }],
        // Enforce a maximum number of lines per file
        'max-lines': [1, { 'max': 1000, 'skipComments': true, 'skipBlankLines': false }],
        // Enforce a maximum depth that callbacks can be nested
        'max-nested-callbacks': [1, 6],
        // Enforce a maximum number of parameters in function definitions
        'max-params': [1, 6],
        // Enforce a maximum number of statements allowed in function blocks
        'max-statements': [1, 140],
        // Enforce a maximum number of statements allowed per line
        'max-statements-per-line': [2, { 'max': 2 }],
        // Enforce newlines between operands of ternary expressions
        'multiline-ternary': 0,
        // Require constructor names to begin with a capital letter
        'new-cap': 2,
        // Require parentheses when invoking a constructor with no arguments
        'new-parens': 2,
        // Require or disallow an empty line after variable declarations
        'newline-after-var': [2, 'always'],
        // Require an empty line before return statements
        'newline-before-return': 2,
        // Require a newline after each call in a method chain
        'newline-per-chained-call': [2, { 'ignoreChainWithDepth': 2 }],
        // Disallow Array constructors
        'no-array-constructor': 2,
        // Disallow bitwise operators
        'no-bitwise': 2,
        // Disallow continue statements
        'no-continue': 0,
        // Disallow inline comments after code
        'no-inline-comments': 0,
        // Disallow if statements as the only statement in else blocks
        'no-lonely-if': 2,
        // Disallow mixed binary operators
        'no-mixed-operators': 2,
        // Disallow mixed spaces and tabs for indentation
        'no-mixed-spaces-and-tabs': 2,
        // Disallow use of chained assignment expressions
        'no-multi-assign': 0,
        // Disallow multiple empty lines
        'no-multiple-empty-lines': [2, { 'max': 1, 'maxBOF': 0 }],
        // Disallow negated conditions
        'no-negated-condition': 0,
        // Disallow nested ternary expressions
        'no-nested-ternary': 2,
        // Disallow Object constructors
        'no-new-object': 2,
        // Disallow use of unary operators, ++ and --
        'no-plusplus': 2,
        // Disallow specified syntax
        'no-restricted-syntax': 0,
        // Disallow all tabs
        'no-tabs': 2,
        // Disallow ternary operators
        'no-ternary': 0,
        // Disallow trailing whitespace at the end of lines
        'no-trailing-spaces': 2,
        // Disallow dangling underscores in identifiers
        'no-underscore-dangle': 0,
        // Disallow ternary operators when simpler alternatives exist
        'no-unneeded-ternary': 2,
        // Disallow whitespace before properties
        'no-whitespace-before-property': 2,
        // Enforce the location of single-line statements
        // comment: brackets are always required, so this rule is unnecessary
        'nonblock-statement-body-position': 0,
        // Enforce consistent line breaks inside braces
        // comment: can't enable because it doesn't allow a lonely property to be in a new line
        'object-curly-newline': [0, { 'multiline': true, 'minProperties': 0 }],
        // Enforce consistent spacing inside braces
        'object-curly-spacing': [2, 'always'],
        // Enforce placing object properties on separate lines
        'object-property-newline': [2, { 'allowMultiplePropertiesPerLine': true }],
        // Enforce variables to be declared either together or separately in functions
        'one-var': [2, 'never'],
        // Require or disallow newlines around variable declarations
        'one-var-declaration-per-line': [2, 'always'],
        // Require or disallow assignment operator shorthand where possible
        'operator-assignment': 0,
        // Enforce consistent linebreak style for operators
        'operator-linebreak': [2, 'after'],
        // Require or disallow padding within blocks
        'padded-blocks': [2, 'never'],
        // Require quotes around object literal property names
        'quote-props': [2, 'as-needed'],
        // Enforce the consistent use of either backticks, double, or single quotes
        'quotes': [2, 'single', 'avoid-escape'],
        // Require JSDoc comments
        'require-jsdoc': 0,
        // Require or disallow semicolons instead of ASI
        'semi': [2, 'always'],
        // Enforce consistent spacing before and after semicolons
        'semi-spacing': [2, { 'before': false, 'after': true }],
        // Require object keys to be sorted
        'sort-keys': 0,
        // Require variables within the same declaration block to be sorted
        'sort-vars': 0,
        // Enforce consistent spacing before blocks
        'space-before-blocks': 2,
        // Enforce consistent spacing before function definition opening parenthesis
        'space-before-function-paren': [2, { 'anonymous': 'always', 'named': 'never' }],
        // Enforce consistent spacing inside parentheses
        'space-in-parens': [2, 'never'],
        // Require spacing around infix operators
        'space-infix-ops': 2,
        // Enforce consistent spacing before or after unary operators
        'space-unary-ops': 2,
        // Enforce consistent spacing after the // or /* in a comment
        'spaced-comment': [2, 'always', {
            'exceptions': ['-', '+'],
            'markers': ['=', '!'], // Space here to support sprockets directives
        }],
        // Require or disallow spacing between template tags and their literals
        'template-tag-spacing': [2, 'never'],
        // Require or disallow Unicode byte order mark (BOM)
        'unicode-bom': [2, 'never'],
        // Require parenthesis around regex literals
        'wrap-regex': 0,
    },
};
