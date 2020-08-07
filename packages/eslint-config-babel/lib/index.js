'use strict';

const babelRules = require('@babel/eslint-plugin').rules;

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
    /* istanbul ignore else */
    if (!babelRules[name].meta.deprecated && baseRules[name]) {
        rules[name] = 'off';
        rules[`@babel/${name}`] = baseRules[name];
    }

    return rules;
}, {});

module.exports = {
    parser: '@babel/eslint-parser',
    plugins: ['@babel/eslint-plugin'],
    rules,
};
