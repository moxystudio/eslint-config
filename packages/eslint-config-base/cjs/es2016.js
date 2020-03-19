'use strict';

module.exports = {
    extends: [
        '../lib/modules/cjs',
        '../es2016',
    ].map(require.resolve),
};
