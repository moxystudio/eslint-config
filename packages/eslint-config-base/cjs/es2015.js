'use strict';

module.exports = {
    extends: [
        '../es2015',
        '../lib/rules/cjs-modules',
    ].map(require.resolve),
};
