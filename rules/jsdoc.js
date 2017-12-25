// JSDoc rules - https://github.com/gajus/eslint-plugin-jsdoc

'use strict';

module.exports = {
    'plugins': [
        'jsdoc',
    ],
    'rules': {
        // Ensure JSDoc comments are valid
        'valid-jsdoc': [2, {
            'requireReturn': false,
            'preferType': {
                'boolean': 'Boolean',
                'number': 'Number',
                'object': 'Object',
                'string': 'String',
                'array': 'Array',
                'date': 'Date',
            },
            'matchDescription': '.+', // Forcing description to be filled
        }],
        // Ensures that parameter names in JSDoc match those in the function declaration
        'jsdoc/check-param-names': 2,
        // Reports invalid block tag names
        'jsdoc/check-tag-names': 2,
        // Reports invalid types
        // comment: disabled because preferred types are already being checked in preferType rule
        'jsdoc/check-types': 0,
        // Enforces a consistent padding of the block description
        'jsdoc/newline-after-description': 2,
        // Requires that block description and tag description are written in complete sentences
        'jsdoc/require-description-complete-sentence': 2,
        // Requires a hyphen before the @param description
        'jsdoc/require-hyphen-before-param-description': 2,
        // Requires that all function parameters are documented
        // comment: disabled because it's already covered in check-param-names
        'jsdoc/require-param': 0,
        // Requires that @param tag has description value
        'jsdoc/require-param-description': 2,
        // Requires that @param tag has type value
        'jsdoc/require-param-type': 2,
        // Requires that @returns tag has description value
        'jsdoc/require-returns-description': 1,
        // Requires that @returns tag has type value
        'jsdoc/require-returns-type': 2,
    },
};
