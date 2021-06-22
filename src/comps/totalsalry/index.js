import React from 'react';
import { SafeAreaView , View, StatusBar, Text} from 'react-native';
import { colors } from '../../utils/Colors';
import { styles } from './styles'


function TotalSalary (props) {
    return (
        <View style={[{flexDirection: 'row'}, props.style]}>
            <Text style={styles.total}>{props.title} </Text>
            <Text style={styles.salary}>{props.value}</Text>
        </View>
    );
}

export default TotalSalary;