'use strict';

module.exports = {
    extends: [
        '../lib/modules/cjs',
        '../es2015',
    ].map(require.resolve),
};
