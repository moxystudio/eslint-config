'use strict';

module.exports = {
    extends: [
        '../lib/modules/cjs',
        '../es2019',
    ].map(require.resolve),
};
