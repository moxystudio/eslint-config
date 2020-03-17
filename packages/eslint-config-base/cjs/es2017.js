'use strict';

module.exports = {
    'extends': [
        '../es2017',
        '../lib/rules/cjs-modules',
    ].map(require.resolve),
};
