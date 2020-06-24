import React from 'react';
import { Text } from 'react-native';

// `no-inline-styles` - Detect inline styles in components
// --------------------------------------------------------------------
// Bad
{
    const MyComponent = () => <Text style={ { fontSize: 14 } }>MOXY</Text>;
}
// Good
{
    const MyComponent = ({ fontSize }) => <Text style={ { fontSize } }>MOXY</Text>;
}

