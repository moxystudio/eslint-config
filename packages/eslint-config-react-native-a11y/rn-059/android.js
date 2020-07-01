'use strict';

module.exports = {
    extends: [
        './base-config',
        '../lib/rules/platforms/rn-059/android',
        '../lib/rules/platforms/rn-059/any',
    ].map(require.resolve),
};
