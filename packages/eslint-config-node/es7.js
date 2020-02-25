'use strict';

module.exports = {
    'extends': [
        '@moxy/eslint-config-core/es7',
        './addons/node',
    ].map(require.resolve),
};

