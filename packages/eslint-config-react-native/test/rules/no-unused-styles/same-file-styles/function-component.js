import React, { Fragment } from 'react';
import { StyleSheet, View } from 'react-native';

// `no-unused-styles` - Detect unused StyleSheet rules in React components
// --------------------------------------------------------------------
// Bad: fails on 'bar'
const styles = StyleSheet.create({
    bar: {},
    foo: {},
});

{
    const MyComponent = () => (
        <View style={ styles.foo } />
    );
}
