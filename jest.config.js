'use strict';

const { compose, baseConfig } = require('@moxy/jest-config-base');

module.exports = compose(
    baseConfig('node'),
    (config) => {
        config.testMatch = ['**/index.test.js'];

        return config;
    }
);
