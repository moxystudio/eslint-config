// React Native A11y plugin - https://github.com/FormidableLabs/eslint-plugin-react-native-a11y

'use strict';

module.exports = {
    rules: {
        // Enforce accessibilityState property value is valid
        // Introduced in React Native v0.61: https://reactnative.dev/docs/0.61/accessibility#accessibilitystate-android-ios
        'react-native-a11y/has-valid-accessibility-state': 'error',
    },
};
