'use strict';

module.exports = {
    extends: [
        '../lib/modules/esm',
        '../es2016',
    ].map(require.resolve),
};
