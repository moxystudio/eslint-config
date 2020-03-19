'use strict';

module.exports = {
    extends: [
        '../lib/modules/esm',
        '../es2019',
    ].map(require.resolve),
};
