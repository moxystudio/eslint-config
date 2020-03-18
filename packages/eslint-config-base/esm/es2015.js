'use strict';

module.exports = {
    extends: [
        '../es2015',
        '../lib/rules/es-modules',
    ].map(require.resolve),
};
