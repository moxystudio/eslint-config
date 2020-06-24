'use strict';

module.exports = {
    extends: [
        './rules/react-native',
        './rules/platform-specific-components',
    ].map(require.resolve),
    plugins: [
        'react-native',
    ],
    env: {
        'react-native/react-native': true,
    },
    settings: {
        'import/resolver': 'react-native',
    },
};
