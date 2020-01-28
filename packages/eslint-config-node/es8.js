'use strict';

module.exports = {
    'extends': [
        '@moxy/eslint-config-core/es8',
        './addons/node',
    ].map(require.resolve),
};
