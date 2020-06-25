'use strict';

module.exports = {
    extends: [
        '../rn-060/ios',
        '../lib/rules/platforms/rn-061/any',
    ].map(require.resolve),
};
