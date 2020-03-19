'use strict';

module.exports = {
    extends: [
        '../lib/modules/esm',
        '../es2015',
    ].map(require.resolve),
};
