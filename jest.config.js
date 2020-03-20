'use strict';

const { compose, baseConfig } = require('@moxy/jest-config');

module.exports = compose([
    baseConfig,
    (config) => {
        config.testEnvironment = 'node';
        config.testMatch = ['**/index.test.js'];

        return config;
    },
]);
