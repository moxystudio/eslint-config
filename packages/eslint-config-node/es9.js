'use strict';

module.exports = {
    'extends': [
        '@moxy/eslint-config-core/es9',
        './lib/node',
    ].map(require.resolve),
};
