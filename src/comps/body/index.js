import React from 'react';
import { useEffect,useState } from 'react';
import { View, Text } from 'react-native';
import { User } from '../../models/Data';
import { fontScale } from '../../utils/Fonts';
import { _retrieveData } from '../../utils/Storage';
import { styles } from './style';

const index = (props) => {
    const [user, setUser] = useState(User)
    useEffect(() => {
        const getData=async()=>{
            await _retrieveData("userInfo").then((data) => { setUser(data) })
        }
        getData();
    })
    return (
        <View style={props.style}>
            <Text style={styles.userInfo}>{user.userId.displayName} ({user.userId.gdvId.maGDV})</Text>
            <View style={{ marginTop: fontScale(6.5), backgroundColor: "#fff", height: fontScale(50), borderTopLeftRadius: fontScale(50), borderTopRightRadius: fontScale(50) }}>

            </View>
        </View>
    );
}

export default index;