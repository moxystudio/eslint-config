// React Native A11y plugin - https://github.com/FormidableLabs/eslint-plugin-react-native-a11y

'use strict';

module.exports = {
    rules: {
        // Enforce accessibilityStates property value is valid
        // Removed from React Native v0.60+: https://reactnative.dev/docs/0.60/view#accessibilitystates
        'react-native-a11y/has-valid-accessibility-states': 'error',
        // Enforce accessibilityHint is used in conjunction with accessibilityLabel
        'react-native-a11y/has-accessibility-hint': 'error',
        // Enforce that <Touchable*> components only have either the accessibilityRole prop or
        // both accessibilityTraits and accessibilityComponentType props set
        'react-native-a11y/has-accessibility-props': 'error',
        // Enforce accessibilityRole property value is valid
        'react-native-a11y/has-valid-accessibility-role': 'error',
        // Enforce if a view has accessible={true}, that there are no touchable elements inside
        'react-native-a11y/no-nested-touchables': 'error',
    },
};
