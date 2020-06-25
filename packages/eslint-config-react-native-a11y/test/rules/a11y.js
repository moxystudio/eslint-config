import React from 'react';
import {
    Image,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    View,
    Text,
} from 'react-native';

// Any rule
// --------------------------------------------------------------------
// Good
{
    const good = () => <TouchableOpacity />;
}
// Also good
{
    const good = () => <TouchableHighlight />;
}
// Also good
{
    const good = () => <TouchableNativeFeedback />;
}
// Algo good
{
    const good = () => <TouchableWithoutFeedback />;
}
// Also good
{
    const good = () => <View />;
}
// Also good
{
    const good = () => <Text />;
}

// `has-valid-accessibility-states` - Enforce accessibilityStates property value is valid
// --------------------------------------------------------------------
// Bad
{
    const bad = () => <TouchableOpacity accessibilityStates="highlighted" />;
}
// Good
{
    const good = () => <TouchableOpacity accessibilityStates={ ['selected'] } />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityStates={ ['disabled'] } />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityStates={ ['selected', 'disabled'] } />;
}

// `has-accessibility-hint` - Enforce accessibilityHint is used in conjunction with accessibilityLabel
// --------------------------------------------------------------------
// Bad
{
    const bad = () => <TouchableOpacity accessibilityLabel="Go back" />;
}
// Good
{
    const bad = () => <TouchableOpacity accessibilityHint="Navigates to the previous screen" accessibilityLabel="Go back" />;
}

// `has-accessibility-props` - Enforce that <Touchable*> components only have either the accessibilityRole prop
// or both accessibilityTraits and accessibilityComponentType props set
// --------------------------------------------------------------------
// Bad
{
    const bad = () => <TouchableOpacity accessibilityComponentType="none" />;
}
// Also bad
{
    const bad = () => <TouchableOpacity accessibilityRole="none" accessibilityComponentType="none" />;
}
// Also bad
{
    const bad = () => <TouchableOpacity accessibilityRole="none" accessibilityTraits="none" />;
}
// Also bad
{
    const bad = () => <TouchableOpacity accessibilityRole="none" accessibilityComponentType="none" accessibilityTraits="none" />;
}
// Good
{
    const good = () => <TouchableOpacity accessibilityRole="none" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityTraits="none" accessibilityComponentType="none" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessible={ false } />;
}

// `has-valid-accessibility-role` - Enforce accessibilityRole property value is valid
// --------------------------------------------------------------------
// Bad
{
    const bad = () => <TouchableOpacity accessibilityRole="modal" />;
}
// Good
{
    const good = () => <TouchableOpacity accessibilityRole="adjustable" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityRole="alert" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityRole="alert" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityRole="button" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityRole="checkbox" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityRole="combobox" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityRole="header" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityRole="image" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityRole="imagebutton" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityRole="keyboardkey" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityRole="link" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityRole="menu" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityRole="menubar" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityRole="menuitem" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityRole="none" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityRole="progressbar" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityRole="radio" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityRole="radiogroup" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityRole="scrollbar" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityRole="search" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityRole="spinbutton" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityRole="summary" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityRole="switch" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityRole="tab" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityRole="tablist" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityRole="text" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityRole="timer" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityRole="toolbar" />;
}

// `no-nested-touchables` - Enforce if a view has accessible={true}, that there are no touchable elements inside
// --------------------------------------------------------------------
// Bad
{
    const bad = () => (
        <TouchableOpacity
            accessibilityTraits="button"
            accessibilityComponentType="button"
            accessibilityLabel="Tap Me!"
            accessibilityHint="Tap Me!"
            accessible>
            <TouchableOpacity />
        </TouchableOpacity>
    );
}
// Good
{
    const good = () => (
        <TouchableOpacity
            accessibilityTraits="button"
            accessibilityComponentType="button"
            accessibilityLabel="Tap Me!"
            accessibilityHint="Tap Me!"
            accessible>
            <Text>MOXY</Text>
        </TouchableOpacity>
    );
}

// `has-valid-accessibility-component-type` - Enforce accessibilityComponentType property value is valid
// --------------------------------------------------------------------

/* eslint-disable react-native-a11y/has-accessibility-props */

// Bad
{
    const bad = () => <TouchableOpacity accessibilityComponentType="modal" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityComponentType="none" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityComponentType="button" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityComponentType="radiobutton_checked" />;
}

/* eslint-enable react-native-a11y/has-accessibility-props */

// `has-valid-accessibility-live-region` - Enforce accessibilityLiveRegion prop values must be valid
// --------------------------------------------------------------------
// Bad
{
    const bad = () => <Text accessibilityLiveRegion="rude" />;
}
// Good
{
    const good = () => <Text accessibilityLiveRegion="none" />;
}
// Also good
{
    const good = () => <Text accessibilityLiveRegion="polite" />;
}
// Also good
{
    const good = () => <Text accessibilityLiveRegion="assertive" />;
}

// `has-valid-important-for-accessibility` - Enforce importantForAccessibility property value is valid
// --------------------------------------------------------------------
// Bad
{
    const bad = () => (
        <View>
            <View importantForAccessibility="no" />
            <View importantForAccessibility="very" />
        </View>
    );
}
// Good
{
    const good = () => (
        <View>
            <View importantForAccessibility="yes" />
            <View importantForAccessibility="no-hide-descendants" />
        </View>
    );
}

// `has-valid-accessibility-traits` - Enforce accessibilityTraits property value is valid
// --------------------------------------------------------------------

/* eslint-disable react-native-a11y/has-accessibility-props */

// Bad
{
    const bad = () => <TouchableOpacity accessibilityTraits="modal" />;
}
// Good
{
    const good = () => <TouchableOpacity accessibilityTraits="none" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityTraits="button" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityTraits="link" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityTraits="header" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityTraits="search" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityTraits="image" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityTraits="selected" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityTraits="plays" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityTraits="key" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityTraits="text" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityTraits="summary" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityTraits="disabled" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityTraits="frequentUpdates" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityTraits="startsMedia" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityTraits="adjustable" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityTraits="allowsDirectInteraction" />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityTraits="pageTurn" />;
}

/* eslint-enable react-native-a11y/has-accessibility-props */

// `has-valid-accessibility-ignores-invert-colors` - Enforce that certain elements use accessibilityIgnoresInvertColors
// to avoid being inverted by device color settings
// --------------------------------------------------------------------
// Bad
{
    const bad = () => <Image />;
}
// Also bad
{
    const bad = () => (
        <View>
            <Image />
        </View>
    );
}
// Good
{
    const good = () => (
        <View accessibilityIgnoresInvertColors>
            <Image />
        </View>
    );
}
// Good
{
    const good = () => (
        <View>
            <Image accessibilityIgnoresInvertColors />
        </View>
    );
}
// Also good
{
    const good = () => (
        <View accessibilityIgnoresInvertColors />
    );
}

// `has-valid-accessibility-actions` - Enforce both accessibilityActions and onAccessibilityAction props are valid
// --------------------------------------------------------------------
// Bad
{
    const bad = () => (
        <View
            accessibilityActions={ [
                { name: 'increment', label: 'increment' },
            ] } />
    );
}
// Also bad
{
    const bad = () => (
        <View
            accessibilityActions={ [
                { name: 'up' },
            ] }
            onAccessibilityAction={ (event) => {
                switch (event.nativeEvent.actionName) {
                case 'up':
                default:
                    break;
                }
            } } />
    );
}
// Good
{
    const good = () => (
        <View
            accessibilityActions={ [
                { name: 'up', label: 'up' },
                { name: 'down', label: 'down' },
            ] }
            onAccessibilityAction={ (event) => {
                switch (event.nativeEvent.actionName) {
                case 'up':
                case 'down':
                default:
                    break;
                }
            } } />
    );
}
// Also good
{
    const good = () => (
        <View
            accessibilityActions={ [
                { name: 'magicTap' }, // iOS only
            ] }
            onAccessibilityAction={ (event) => {
                switch (event.nativeEvent.actionName) {
                case 'magicTap':
                default:
                    break;
                }
            } } />
    );
}
// Also good
{
    const good = () => (
        <View
            accessibilityActions={ [
                { name: 'escape' }, // iOS only
            ] }
            onAccessibilityAction={ (event) => {
                switch (event.nativeEvent.actionName) {
                case 'escape':
                default:
                    break;
                }
            } } />
    );
}
// Also good
{
    const good = () => (
        <View
            accessibilityActions={ [
                { name: 'activate' },
            ] }
            onAccessibilityAction={ (event) => {
                switch (event.nativeEvent.actionName) {
                case 'activate':
                default:
                    break;
                }
            } } />
    );
}
// Also good
{
    const good = () => (
        <View
            accessibilityActions={ [
                { name: 'increment' },
            ] }
            onAccessibilityAction={ (event) => {
                switch (event.nativeEvent.actionName) {
                case 'escape':
                default:
                    break;
                }
            } } />
    );
}
// Also good
{
    const good = () => (
        <View
            accessibilityActions={ [
                { name: 'decrement' },
            ] }
            onAccessibilityAction={ (event) => {
                switch (event.nativeEvent.actionName) {
                case 'escape':
                default:
                    break;
                }
            } } />
    );
}
// Also good
{
    const good = () => (
        <View
            accessibilityActions={ [
                { name: 'longpress' }, // Android only
            ] }
            onAccessibilityAction={ (event) => {
                switch (event.nativeEvent.actionName) {
                case 'escape':
                default:
                    break;
                }
            } } />
    );
}

// `has-valid-accessibility-state` - Enforce accessibilityState property value is valid
// --------------------------------------------------------------------
// Bad
{
    const bad = () => <TouchableOpacity accessibilityState="disabled" />;
}
// Also bad
{
    const bad = () => <TouchableOpacity accessibilityState={ ['disabled'] } />;
}
// Good
{
    const good = () => <TouchableOpacity accessibilityState={ { disabled: true } } />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityState={ { checked: true } } />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityState={ { checked: 'mixed' } } />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityState={ { disabled: true, checked: true } } />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityState={ { busy: true } } />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityState={ { expanded: true } } />;
}

// `has-valid-accessibility-value` - Enforce accessibilityValue property value is valid
// --------------------------------------------------------------------
// Bad
{
    const bad = () => <TouchableOpacity accessibilityValue={ { min: 0, now: 50, max: 100, text: 'MOXY' } } />;
}
// Also bad
{
    const bad = () => <TouchableOpacity accessibilityValue={ { now: 50 } } />;
}
// Also bad
{
    const bad = () => <TouchableOpacity accessibilityValue={ { min: '0', now: '50', max: '100' } } />;
}
// Also bad
{
    const bad = () => <TouchableOpacity accessibilityValue={ { text: 0 } } />;
}
// Good
{
    const good = () => <TouchableOpacity accessibilityValue={ { min: 0, now: 50, max: 100 } } />;
}
// Also good
{
    const good = () => <TouchableOpacity accessibilityValue={ { text: 'MOXY' } } />;
}
