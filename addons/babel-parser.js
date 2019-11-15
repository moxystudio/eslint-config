'use strict';

var style = require('../rules/style');
var bestPratices = require('../rules/best-practices');
var errors = require('../rules/errors');

module.exports = {
    'parser': 'babel-eslint',
    'plugins': ['babel'],
    'rules': {

        // Enforce camelcase naming convention
        'babel/camelcase': style.rules.camelcase,
        'camelcase': 0,
        // Enforce the consistent use of either backticks, double, or single quotes
        'babel/quotes': style.rules.quotes,
        'quotes': 0,
        // Disallow unused expressions
        'babel/no-unused-expressions': bestPratices.rules['no-unused-expressions'],
        'no-unused-expressions': 0,
        // Enforce comparing typeof expressions against valid strings
        'babel/valid-typeof': errors.rules['valid-typeof'],
        'valid-typeof': 0,
        // Enforce consistent spacing inside braces
        'babel/object-curly-spacing': style.rules['object-curly-spacing'],
        'object-curly-spacing': 0,
        // Require constructor names to begin with a capital letter
        'babel/new-cap': style.rules['new-cap'],
        'new-cap': 0,
        // Disallow this keywords outside of classes or class-like objects
        'babel/no-invalid-this': bestPratices.rules['no-invalid-this'],
        'no-invalid-this': 0,
        // Require or disallow semicolons instead of ASI
        'babel/semi': style.rules.semi,
        'semi': 0,
    },
};
