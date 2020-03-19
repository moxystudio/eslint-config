'use strict';

module.exports = {
    extends: [
        '../lib/modules/cjs',
        '../es2017',
    ].map(require.resolve),
};
