'use strict';

module.exports = {
    extends: [
        './es2018',
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2019,
    },
};
