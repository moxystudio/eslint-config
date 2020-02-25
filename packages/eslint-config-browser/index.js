'use strict';

module.exports = {
    'extends': [
        '@moxy/eslint-config-core/es10',
        './addons/browser',
        './addons/babel-parser',
        './addons/es-modules',
    ].map(require.resolve),
};
