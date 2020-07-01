'use strict';

const baseConfig = require('./base-config');

module.exports = Object.assign(
    {
        extends: [
            '../lib/rules/platforms/rn-059/any',
            '../lib/rules/platforms/rn-059/ios',
        ].map(require.resolve),
    },
    baseConfig
);
