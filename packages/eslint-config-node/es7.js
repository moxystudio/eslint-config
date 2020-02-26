'use strict';

module.exports = {
    'extends': [
        '@moxy/eslint-config-core/es7',
        './lib/node',
    ].map(require.resolve),
};

