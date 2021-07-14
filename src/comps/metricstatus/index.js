import React from 'react';
import {View, Text } from 'react-native';
import { styles } from './styles'

function MetricStatus(props) {
    return (
        <View style={[styles.container, props.style]}>
            <Text style={styles.statusTitle}>{props.title} </Text>
            <Text style={styles.statusData}>{props.status}</Text>
        </View>
    );
}

export default MetricStatus;