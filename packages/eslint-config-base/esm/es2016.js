'use strict';

module.exports = {
    extends: [
        '../es2016',
        '../lib/rules/es-modules',
    ].map(require.resolve),
};
