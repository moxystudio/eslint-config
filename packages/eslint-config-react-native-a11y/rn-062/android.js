'use strict';

module.exports = {
    extends: [
        '../rn-061/android',
        '../lib/rules/platforms/rn-062/any',
    ].map(require.resolve),
};
