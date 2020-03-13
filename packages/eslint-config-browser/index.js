'use strict';

module.exports = {
    'extends': [
        '@moxy/eslint-config-core/es10',
        './lib/browser',
        './lib/babel-parser',
        './lib/es-modules',
    ].map(require.resolve),
};
