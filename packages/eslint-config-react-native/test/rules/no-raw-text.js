import React from 'react';
import { Text, View } from 'react-native';

// `no-raw-text` - Detect raw text outside of Text component
// --------------------------------------------------------------------
// Bad
{
    const MyComponent = () => <View>MOXY</View>;
}
// Good
{
    const MyComponent = () => <Text>MOXY</Text>;
}
// Also good
{
    const MyComponent = () => <View><Text>MOXY</Text></View>;
}
