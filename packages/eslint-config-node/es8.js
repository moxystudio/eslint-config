'use strict';

module.exports = {
    'extends': [
        '@moxy/eslint-config-core/es8',
        './lib/node',
    ].map(require.resolve),
};
