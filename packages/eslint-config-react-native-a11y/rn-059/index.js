'use strict';

const baseConfig = require('./base-config');

module.exports = Object.assign(
    {
        extends: [
            '../lib/rules/platforms/rn-059/android',
            '../lib/rules/platforms/rn-059/ios',
            '../lib/rules/platforms/rn-059/any',
        ].map(require.resolve),
    },
    baseConfig
);
