'use strict';

module.exports = {
    extends: [
        '../lib/rules/platforms/rn-059/any',
        '../lib/rules/platforms/rn-059/android',
    ].map(require.resolve),
    plugins: [
        'react-native-a11y',
    ],
};
