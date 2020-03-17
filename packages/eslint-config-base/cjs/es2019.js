'use strict';

module.exports = {
    'extends': [
        '../es2019',
        '../lib/rules/cjs-modules',
    ].map(require.resolve),
};
