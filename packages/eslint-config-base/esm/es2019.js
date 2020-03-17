'use strict';

module.exports = {
    'extends': [
        '../es2019',
        '../lib/rules/es-modules',
    ].map(require.resolve),
};
