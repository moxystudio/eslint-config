// eslint - JSDoc rules
'use strict';

module.exports = {
    'plugins': [
        'jsdoc',
    ],
    'rules': {
        // ensure JSDoc comments are valid
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
            'matchDescription': '.+', // forcing description to be filled
        }],
        'jsdoc/check-param-names': 2,
        'jsdoc/check-tag-names': 2,
        'jsdoc/check-types': 0, // preferred types are already being checked in preferType rule
        'jsdoc/newline-after-description': 2,
        'jsdoc/require-description-complete-sentence': 2,
        'jsdoc/require-hyphen-before-param-description': 2,
        'jsdoc/require-param': 0, // already covered in check-param-names
        'jsdoc/require-param-description': 2,
        'jsdoc/require-param-type': 2,
        'jsdoc/require-returns-description': 1,
        'jsdoc/require-returns-type': 2,
    },
};
