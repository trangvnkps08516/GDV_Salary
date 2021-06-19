import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

const ListItem = (props) => {
    const {title} = props;
    return (
        <View>
            <Text>This is ListItem of screen</Text>
        </View>
    );
}

export default ListItem;