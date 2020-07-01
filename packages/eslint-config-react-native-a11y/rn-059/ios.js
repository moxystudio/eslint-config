'use strict';

module.exports = {
    extends: [
        './base-config',
        '../lib/rules/platforms/rn-059/any',
        '../lib/rules/platforms/rn-059/ios',
    ].map(require.resolve),
};
