'use strict';

module.exports = {
    extends: [
        '../rn-059',
        '../lib/rules/platforms/rn-060/any',
    ].map(require.resolve),
};
