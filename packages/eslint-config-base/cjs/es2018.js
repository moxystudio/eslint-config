'use strict';

module.exports = {
    extends: [
        '../es2018',
        '../lib/rules/cjs-modules',
    ].map(require.resolve),
};
