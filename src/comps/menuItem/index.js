import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

const MenuItem = (props) => {
    const {title} = props;
    return (
        <View>
            <Text>This is MenuItem of screen</Text>
        </View>
    );
}

export default MenuItem;