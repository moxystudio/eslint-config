// React Native A11y plugin - https://github.com/FormidableLabs/eslint-plugin-react-native-a11y

'use strict';

module.exports = {
    rules: {
        // Enforce accessibilityValue property value is valid
        // Introduced in React Native v0.62:
        // - https://reactnative.dev/docs/accessibility#accessibilityvalue-android-ios
        // - https://reactnative.dev/blog/2020/03/26/version-0.62#other-improvements
        'react-native-a11y/has-valid-accessibility-value': 'error',
    },
};
