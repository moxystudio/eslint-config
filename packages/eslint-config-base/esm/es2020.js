'use strict';

module.exports = {
    extends: [
        '../es2020',
        '../lib/rules/es-modules',
    ].map(require.resolve),
};
