'use strict';

module.exports = {
    extends: [
        '../lib/modules/esm',
        '../es2018',
    ].map(require.resolve),
};
