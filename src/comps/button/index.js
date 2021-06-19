import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

const Button = (props) => {
    const {title} = props;
    return (
        <View>
            <Text>This is Button of screen</Text>
        </View>
    );
}

export default Button;