'use strict';

module.exports = {
    'extends': [
        '../es2018',
        '../lib/rules/es-modules',
    ].map(require.resolve),
};
