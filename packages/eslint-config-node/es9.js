'use strict';

module.exports = {
    'extends': [
        '@moxy/eslint-config-core/es9',
        './addons/node',
    ].map(require.resolve),
};