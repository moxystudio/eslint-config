'use strict';

module.exports = {
    extends: [
        './es2016',
    ].map(require.resolve),
    env: {
        es2017: true,
    },
    parserOptions: {
        ecmaVersion: 2017,
    },
};
