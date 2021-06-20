import React from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
import { styles } from './styles';

const Button = (props) => {
    const {
        label,
        width,
        center,
        style,
        onPress
    } = props;
    return (
        <TouchableOpacity style={[styles.container,{width:width,alignSelf:center ? "center" : "auto"},style]} onPress={onPress}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
}

export default Button;