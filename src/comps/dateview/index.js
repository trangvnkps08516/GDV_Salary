import React from 'react';
import { View,Text } from "react-native";
import { styles } from './styles';

const DateView=(props)=> {
    return (
        <View style={[styles.container,props.style]}>
            <Text style={styles.dateLabel}>{props.dateLabel}</Text>
        </View>
    );
}

export default DateView;