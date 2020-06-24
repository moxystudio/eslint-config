import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// `no-color-literals` - Detect color literals in styles
// --------------------------------------------------------------------
{
    const styles = StyleSheet.create({
        text: {},
    });

    // Bad
    {
        const MyComponent = () => <View style={ { backgroundColor: '#FFF' } } />;
    }

    // Also bad
    {
        const MyComponent = () => <View style={ { borderColor: '#FFF' } } />;
    }

    // Also bad
    {
        const MyComponent = () => <Text style={ { color: '#FFF' } } />;
    }

    // Also bad
    {
        const MyComponent = () => <Text style={ { color: '#FFF' } } />;
    }

    // Also bad
    {
        const MyComponent = () => <Text style={ [styles.text, { color: '#FFF' }] }>MOXY</Text>;
    }

    // Also bad
    {
        const MyComponent = (props) => <Text style={ [styles.text, props.foo && { color: '#FFF' }] }>MOXY</Text>;
    }

    // Also bad
    {
        const MyComponent = () => <Text style={ [styles.text, { color: props.foo ? '#FFF' : '#000' }] }>MOXY</Text>;
    }
}
// Also bad
{
    const styles = StyleSheet.create({
        text: {
            backgroundColor: 'blue',
            color: 'red',
        },
    });
}
// Also bad
{
    const styles = StyleSheet.create({
        text: {
            backgroundColor: '#000',
            color: '#FFF',
        },
    });
}
// Also bad
{
    const fooColor = '#000';
    const styles = StyleSheet.create({
        text: {
            color: true ? '#FFF' : fooColor,
        },
    });
}
// Good
{
    const fooColor = '#000';
    const styles = StyleSheet.create({
        text: {
            color: fooColor,
        },
    });
}
