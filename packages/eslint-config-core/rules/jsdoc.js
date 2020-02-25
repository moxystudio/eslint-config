// JSDoc rules - https://github.com/gajus/eslint-plugin-jsdoc

'use strict';

module.exports = {
    'plugins': [
        'jsdoc',
    ],
    'rules': {
        // Ensures that parameter names in JSDoc match those in the function declaration
        'jsdoc/check-param-names': 2,
        // Reports invalid block tag names
        'jsdoc/check-tag-names': 2,
        // Reports invalid types
        'jsdoc/check-types': 2,
        // Enforces a consistent padding of the block description
        'jsdoc/newline-after-description': 2,
        // Requires that block description and tag description are written in complete sentences
        'jsdoc/require-description-complete-sentence': 2,
        // Requires a hyphen before the @param description
        'jsdoc/require-hyphen-before-param-description': 2,
        // Requires that all function parameters are documented
        'jsdoc/require-param': 2,
        // Requires that all function parameters have name.
        'jsdoc/require-param-name': 2,
        // Requires that @param tag has description value
        'jsdoc/require-param-description': 2,
        // Requires that @param tag has type value
        'jsdoc/require-param-type': 2,
        // Requires @return if the function returns a value
        'jsdoc/require-returns': 2,
        // Requires that @returns tag has description value
        'jsdoc/require-returns-description': 1,
        // Requires that @returns tag has type value
        'jsdoc/require-returns-type': 2,
        // Checks if the return expression exists in function body and in the comment.
        'jsdoc/require-returns-check': 2,
        // Requires all types to be valid JSDoc or Closure compiler types without syntax errors
        'jsdoc/valid-types': 2,
    },
};
