import React from 'react';
import { View,Text } from "react-native";
import { styles } from './style';

const AuthTitle = (props) => {
    return (
        <Text style={[styles.container,props.style]}>{props.title}</Text>
    );
}

export default AuthTitle;