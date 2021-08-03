import React from 'react';
import { Image,View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../utils/Colors';
import { images } from '../../utils/Images';

function CircleImage(props) {
    return (
        props.normal ?
            <View style={[props.style, styles.container, props.type == "upload" ? { shadowRadius: props.size, width: props.size, height: props.size } : { shadowRadius: props.size, width: props.size, height: props.size, borderRadius: props.size }]}>
                <Image style={{ position: 'absolute', width: props.size, height: props.size, borderRadius: props.size / 2 }} source={props.type == "default" ? images.avatar : props.type == "upload" ? images.headphone : props.image == "" ? images.avatar : props.image} />
            </View>
            :
            <TouchableOpacity onPress={props.onPress} style={[props.style, styles.container, props.type == "upload" ? { shadowRadius: props.size, width: props.size, height: props.size,backgroundColor:colors.white } : { shadowRadius: props.size, width: props.size, height: props.size, borderRadius: props.size,backgroundColor:colors.white }]}>
                <Image style={{ position: 'absolute', width: props.size, height: props.size, borderRadius: props.size / 2 }} source={props.type == "default" ? images.avatar : props.type == "upload" ? images.headphone : props.image == "" ? images.avatar : props.image} />
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        shadowColor: '#000',
        shadowOffset: {
            width: 20,
            height: 20,
        },
        shadowOpacity: 0.5,
        elevation: 6
    }
})

export default CircleImage;
