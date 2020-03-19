'use strict';

module.exports = {
    extends: [
        '../lib/modules/cjs',
        '../es2020',
    ].map(require.resolve),
};
