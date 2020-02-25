'use strict';

module.exports = {
    'extends': [
        '@moxy/eslint-config-core/es10',
        './addons/node',
    ].map(require.resolve),
};

