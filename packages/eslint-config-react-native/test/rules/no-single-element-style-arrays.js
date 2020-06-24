import React from 'react';
import { StyleSheet, View } from 'react-native';

// `no-single-element-style-arrays` - No Single Element Style Arrays are allowed
// --------------------------------------------------------------------
const styles = StyleSheet.create({
    a: {},
    b: {},
});

// Bad
{
    const MyComponent = () => <View style={ [{ height: 20 }] } />;
}
// Also bad
{
    const MyComponent = () => <View style={ [styles.a] } />;
}
// Good
{
    const MyComponent = () => <View style={ [styles.a, styles.b] } />;
}
