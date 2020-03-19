'use strict';

module.exports = {
    extends: [
        '../lib/modules/cjs',
        '../es2018',
    ].map(require.resolve),
};
