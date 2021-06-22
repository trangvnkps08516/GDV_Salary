import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const MenuItem = (props) => {
    const { title, icon, onPress,style,width,value } = props;
    return (
        <View style={[style,{width:width,alignSelf:"center"}]}>
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <View style={styles.bg}>
                    <Text style={styles.title}>{title}</Text>
                    <Image source={icon} style={styles.icon} />
                    {
                        value ? <Text style={styles.value}>{value}</Text> : null
                    }
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default MenuItem;