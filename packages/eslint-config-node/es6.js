'use strict';

module.exports = {
    'extends': [
        '@moxy/eslint-config-core/es6',
        './addons/node',
    ].map(require.resolve),
};
