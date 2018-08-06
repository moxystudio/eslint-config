'use strict';

module.exports = {
    'parser': 'babel-eslint',
    'plugins': ['babel'],
    'rules': {
        // Require constructor names to begin with a capital letter
        'babel/new-cap': 2,
        'new-cap': 0,
        // Enforce consistent spacing inside braces
        'babel/object-curly-spacing': [2, 'always'],
        'object-curly-spacing': 0,
        // Disallow this keywords outside of classes or class-like objects
        'babel/no-invalid-this': 2,
        'no-invalid-this': 0,
        // Require or disallow semicolons instead of ASI
        'babel/semi': [2, 'always'],
        'semi': 0,
    },
};
