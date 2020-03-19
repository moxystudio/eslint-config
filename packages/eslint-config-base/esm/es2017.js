'use strict';

module.exports = {
    extends: [
        '../es2017',
        '../lib/rules/es-modules',
    ].map(require.resolve),
};
