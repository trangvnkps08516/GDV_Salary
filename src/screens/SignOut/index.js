import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { fontScale } from '../../utils/Fonts';
import { images } from '../../utils/Images';
import { text } from '../../utils/Text';
import { styles } from './styles';

const SignOut = (props) => {
    return (
        <ImageBackground style={styles.container} source={images.logoutbg}>
            <View style={styles.dialog}>
                <Text style={styles.logoutMessage}>{text.logoutMessage}</Text>
                <View style={{ marginTop:fontScale(20),flexDirection: "row", alignSelf: "center",justifyContent:"space-between" }}>
                    <Button style={{marginRight:fontScale(30)}} text="Hủy" color="red" width={fontScale(100)} icon={images.cancle} />
                    <Button style={{marginLeft:fontScale(30)}} text="Có" color="green" width={fontScale(100)} icon={images.check} />
                </View>
            </View>
        </ImageBackground>
    );
}

const Button = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onClick}
            disabled={props.disabled == true ? true : false}
            style={[
                styles.button,
                props.style,
                { backgroundColor: props.color, flexDirection: "row" },
            ]}
        >
            <Image source={props.icon} resizeMode="cover" style={styles.icon} />
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
};


export default SignOut;