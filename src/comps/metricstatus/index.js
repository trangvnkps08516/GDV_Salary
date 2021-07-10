import React from 'react';
import {View, Text } from 'react-native';
import { fontScale } from '../../utils/Fonts';
import { styles } from './styles'

function MetricStatus(props) {
    return (
        <View style={[{ flexDirection: 'row' }, props.style]}>
            <Text style={styles.statusData}>Trạng thái số liệu: </Text>
            <Text style={{ color: "#FEF500", fontSize: fontScale(15) }}>{props.status}</Text>
        </View>
    );
}

export default MetricStatus;