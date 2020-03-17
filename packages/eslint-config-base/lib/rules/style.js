// Stylistic issues - http://eslint.org/docs/rules/#stylistic-issues

'use strict';

module.exports = {
    'rules': {
        // Enforce consistent spacing inside array brackets
        'array-bracket-spacing': ['error', 'never'],
        // Enforce consistent spacing inside single-line blocks
        'block-spacing': 'error',
        // Enforce consistent brace style for blocks
        'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
        // Enforce camelcase naming convention
        'camelcase': 'error',
        // Enforce or disallow capitalization of the first letter of a comment
        'capitalized-comments': ['error', 'always', {
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
                'while',
                'yield',
            ].join('|'),
            'ignoreConsecutiveComments': true,
        }],
        // Require or disallow trailing commas
        'comma-dangle': ['error', 'always-multiline'],
        // Enforce consistent spacing before and after commas
        'comma-spacing': ['error', { 'before': false, 'after': true }],
        // Enforce consistent comma style
        'comma-style': ['error', 'last'],
        // Enforce consistent spacing inside computed property brackets
        'computed-property-spacing': ['error', 'never'],
        // Enforce consistent naming when capturing the current execution context
        'consistent-this': ['error', 'that'],
        // Require or disallow newline at the end of files
        'eol-last': 'error',
        // Require or disallow spacing between function identifiers and their invocations
        'func-call-spacing': ['error', 'never'],
        // Enforce the consistent use of either function declarations or expressions
        'func-style': ['error', 'declaration', { 'allowArrowFunctions': true }],
        // Enforce consistent indentation
        'indent': ['error', 4, {
            'ignoredNodes': ['TemplateLiteral > *'],
        }],
        // Enforce the consistent use of either double or single quotes in JSX attributes
        'jsx-quotes': ['error', 'prefer-double'],
        // Enforce consistent spacing between keys and values in object literal properties
        'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
        // Enforce consistent spacing before and after keywords
        'keyword-spacing': 'error',
        // Enforce consistent linebreak style
        'linebreak-style': ['error', 'unix'],
        // Require or disallow newlines around directives
        'lines-around-directive': ['error', {
            'before': 'always', // Enable because if there's a comment at the top of the file, it needs a blank line before the 'use strict'
            'after': 'always',
        }],
        // Enforce a maximum depth that blocks can be nested
        'max-depth': ['warn', 6],
        // Enforce a maximum line length
        'max-len': ['warn', {
            'code': 140,
            'tabWidth': 4,
            'ignoreTrailingComments': true,
            'ignoreUrls': true,
            'ignoreTemplateLiterals': true,
        }],
        // Enforce a maximum number of lines per file
        'max-lines': ['warn', { 'max': 1000, 'skipComments': true, 'skipBlankLines': false }],
        // Enforce a maximum depth that callbacks can be nested
        'max-nested-callbacks': ['warn', 6],
        // Enforce a maximum number of parameters in function definitions
        'max-params': ['warn', 6],
        // Enforce a maximum number of statements allowed in function blocks
        'max-statements': ['warn', 140],
        // Enforce a maximum number of statements allowed per line
        'max-statements-per-line': ['error', { 'max': 2 }],
        // Require constructor names to begin with a capital letter
        'new-cap': 'error',
        // Require parentheses when invoking a constructor with no arguments
        'new-parens': 'error',
        // Disallow Array constructors
        'no-array-constructor': 'error',
        // Disallow bitwise operators
        'no-bitwise': 'error',
        // Disallow if statements as the only statement in else blocks
        'no-lonely-if': 'error',
        // Disallow mixed binary operators
        'no-mixed-operators': 'error',
        // Disallow mixed spaces and tabs for indentation
        'no-mixed-spaces-and-tabs': 'error',
        // Disallow multiple empty lines
        'no-multiple-empty-lines': ['error', { 'max': 1, 'maxBOF': 0 }],
        // Disallow nested ternary expressions
        'no-nested-ternary': 'error',
        // Disallow Object constructors
        'no-new-object': 'error',
        // Disallow use of unary operators, ++ and --
        'no-plusplus': 'error',
        // Disallow all tabs
        'no-tabs': 'error',
        // Disallow trailing whitespace at the end of lines
        'no-trailing-spaces': 'error',
        // Disallow ternary operators when simpler alternatives exist
        'no-unneeded-ternary': 'error',
        // Disallow whitespace before properties
        'no-whitespace-before-property': 'error',
        // Enforce consistent spacing inside braces
        'object-curly-spacing': ['error', 'always'],
        // Enforce placing object properties on separate lines
        'object-property-newline': ['error', { 'allowMultiplePropertiesPerLine': true }],
        // Enforce variables to be declared either together or separately in functions
        'one-var': ['error', 'never'],
        // Require or disallow newlines around variable declarations
        'one-var-declaration-per-line': ['error', 'always'],
        // Enforce consistent linebreak style for operators
        'operator-linebreak': ['error', 'after'],
        // Require or disallow padding within blocks
        'padded-blocks': ['error', 'never'],
        // Require newlines in certain situations
        'padding-line-between-statements': [
            2,
            { 'blankLine': 'always', 'prev': '*', 'next': 'return' },
            { 'blankLine': 'always', 'prev': ['let', 'const'], 'next': '*' },
            { 'blankLine': 'any', 'prev': ['let', 'const'], 'next': ['let', 'const'] },
        ],
        // Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
        // comment: can't use this rule as it errors in ES2015; instead, we are enabling it in `es2016`
        // 'prefer-exponentiation-operator': 'error',
        // Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
        // comment: can't use this rule as it errors in <= ES2017; instead, we are enabling it in `es2018`
        // 'prefer-object-spread': 'error',
        // Require quotes around object literal property names
        'quote-props': ['error', 'as-needed'],
        // Enforce the consistent use of either backticks, double, or single quotes
        'quotes': ['error', 'single', 'avoid-escape'],
        // Require or disallow semicolons instead of ASI
        'semi': ['error', 'always'],
        // Enforce consistent spacing before and after semicolons
        'semi-spacing': ['error', { 'before': false, 'after': true }],
        // Enforce location of semicolons
        'semi-style': ['error', 'last'],
        // Enforce consistent spacing before blocks
        'space-before-blocks': 'error',
        // Enforce consistent spacing before function definition opening parenthesis
        'space-before-function-paren': ['error', { 'anonymous': 'always', 'named': 'never' }],
        // Enforce consistent spacing inside parentheses
        'space-in-parens': ['error', 'never'],
        // Require spacing around infix operators
        'space-infix-ops': 'error',
        // Enforce consistent spacing before or after unary operators
        'space-unary-ops': 'error',
        // Enforce consistent spacing after the // or /* in a comment
        'spaced-comment': ['error', 'always', {
            'exceptions': ['-', '+'],
            'markers': ['=', '!'], // Space here to support sprockets directives
        }],
        // Enforce spacing around colons of switch statements
        'switch-colon-spacing': 'error',
        // Require or disallow spacing between template tags and their literals
        'template-tag-spacing': ['error', 'never'],
        // Require or disallow Unicode byte order mark (BOM)
        'unicode-bom': ['error', 'never'],
    },
};
