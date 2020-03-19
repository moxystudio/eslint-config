'use strict';

module.exports = {
    extends: [
        '../lib/modules/esm',
        '../es2017',
    ].map(require.resolve),
};
