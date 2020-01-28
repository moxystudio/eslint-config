'use strict';

module.exports = {
    'extends': [
        '@moxy/eslint-config-browser',
        '@moxy/eslint-config-node',
    ].map(require.resolve),
};
