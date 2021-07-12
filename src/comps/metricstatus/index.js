import React from 'react';
import { SafeAreaView, View, StatusBar, Text } from 'react-native';
import { colors } from '../../utils/Colors';
import { fontScale } from '../../utils/Fonts';
import { styles } from './styles'


function MetricStatus(props) {
    return (
        <View style={[{ flexDirection: 'row' }, props.style]}>
            <Text style={styles.statusData}>{props.title} </Text>
            <Text style={{ color: "#FEF500", fontSize: fontScale(15) }}>{props.status}</Text>
        </View>
    );
}

export default MetricStatus;