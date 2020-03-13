'use strict';

module.exports = {
    'extends': [
        '@moxy/eslint-config-core/es6',
        './lib/node',
    ].map(require.resolve),
};
