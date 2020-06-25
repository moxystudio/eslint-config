'use strict';

module.exports = {
    extends: [
        '../rn-059/ios',
        '../lib/rules/platforms/rn-060/any',
    ].map(require.resolve),
};
