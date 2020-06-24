import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';

class MyComponent extends Component {
    render() {
        return <View style={ styles.foo } />;
    }
}

export default MyComponent;
