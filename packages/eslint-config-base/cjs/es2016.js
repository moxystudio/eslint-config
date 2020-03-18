'use strict';

module.exports = {
    extends: [
        '../es2016',
        '../lib/rules/cjs-modules',
    ].map(require.resolve),
};
