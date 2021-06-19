import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

const Header = (props) => {
    const {title} = props;
    return (
        <View>
            <Text>This is header of screen</Text>
        </View>
    );
}

export default Header;