// JSDoc rules - https://github.com/gajus/eslint-plugin-jsdoc

'use strict';

module.exports = {
    rules: {
        // Ensures that parameter names in JSDoc match those in the function declaration
        'jsdoc/check-param-names': 'error',
        // Reports invalid block tag names
        'jsdoc/check-tag-names': 'error',
        // Reports invalid types
        'jsdoc/check-types': 'error',
        // Enforces a consistent padding of the block description
        'jsdoc/newline-after-description': 'error',
        // Requires that block description and tag description are written in complete sentences
        'jsdoc/require-description-complete-sentence': 'error',
        // Requires a hyphen before the @param description
        'jsdoc/require-hyphen-before-param-description': 'error',
        // Requires that all function parameters are documented
        'jsdoc/require-param': 'error',
        // Requires that all function parameters have name.
        'jsdoc/require-param-name': 'error',
        // Requires that @param tag has description value
        'jsdoc/require-param-description': 'error',
        // Requires that @param tag has type value
        'jsdoc/require-param-type': 'error',
        // Requires @return if the function returns a value
        'jsdoc/require-returns': 'error',
        // Requires that @returns tag has description value
        'jsdoc/require-returns-description': 'warn',
        // Requires that @returns tag has type value
        'jsdoc/require-returns-type': 'error',
        // Checks if the return expression exists in function body and in the comment.
        'jsdoc/require-returns-check': 'error',
        // Requires all types to be valid JSDoc or Closure compiler types without syntax errors
        'jsdoc/valid-types': 'error',
    },
};
