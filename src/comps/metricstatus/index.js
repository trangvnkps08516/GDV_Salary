import React from 'react';
import { SafeAreaView , View, StatusBar, Text} from 'react-native';
import { colors } from '../../utils/Colors';
import { styles } from './styles'


function MetricStatus (props) {
    return (
        <View style={[{flexDirection: 'row'}, props.style]}>
            <Text style={styles.statusData}>Trạng thái số liệu: </Text>
            <Text style={{color: "#FEF500"}}>{props.status}</Text>
        </View>
    );
}

export default MetricStatus;