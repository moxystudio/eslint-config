'use strict';

module.exports = {
    'extends': [
        '../es2020',
        '../lib/rules/cjs-modules',
    ].map(require.resolve),
};
