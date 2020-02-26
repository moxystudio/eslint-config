'use strict';

module.exports = {
    'extends': [
        '@moxy/eslint-config-core/es10',
        './lib/node',
    ].map(require.resolve),
};

