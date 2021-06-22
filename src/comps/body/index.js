import React from 'react';
import { View,Text } from 'react-native';
import { fontScale } from '../../utils/Fonts';
import { styles } from './style';

const index=(props)=> {
    return (
        <View style={props.style}>
            <Text style={styles.userInfo}>{props.userInfo}</Text>
            <View style={{marginTop:fontScale(6.5),backgroundColor:"#fff",height:fontScale(50),borderTopLeftRadius:fontScale(50),borderTopRightRadius:fontScale(50)}}>

            </View>
        </View>
    );
}

export default index;