'use strict';

module.exports = {
    extends: [
        '../lib/modules/esm',
        '../es2020',
    ].map(require.resolve),
};
