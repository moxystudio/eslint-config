'use strict';

const babelRules = require('eslint-plugin-babel').rules;

const baseRules = Object.assign(
    {},
    require('@moxy/eslint-config-base/lib/rules/best-practices').rules,
    require('@moxy/eslint-config-base/lib/rules/errors').rules,
    require('@moxy/eslint-config-base/lib/rules/es6').rules,
    require('@moxy/eslint-config-base/lib/rules/node').rules,
    require('@moxy/eslint-config-base/lib/rules/strict').rules,
    require('@moxy/eslint-config-base/lib/rules/style').rules,
    require('@moxy/eslint-config-base/lib/rules/variables').rules
);

const rules = Object.keys(babelRules).reduce((rules, name) => {
    if (!babelRules[name].meta.deprecated && baseRules[name]) {
        rules[name] = 0;
        rules[`babel/${name}`] = baseRules[name];
    }

    return rules;
}, {});

module.exports = {
    'parser': require.resolve('babel-eslint'),
    'plugins': ['babel'],
    rules,
};
