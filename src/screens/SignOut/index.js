import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, BackHandler } from 'react-native';
import { signoutUser } from '../../api';
import { fontScale } from '../../utils/Fonts';
import { images } from '../../utils/Images';
import { text } from '../../utils/Text';
import { useNavigation } from '@react-navigation/core';
import { styles } from './styles';
import { useEffect } from 'react';
import { _removeData, _retrieveData } from '../../utils/Storage';
import { backHandler } from '../../utils/Logistics';

const SignOut = () => {
    const navigation = useNavigation();

    const logoutUser = async () => {
        await signoutUser(navigation).then(async () => {
            await _removeData("userInfo");
        });
    }
    
    useEffect(() => {
        backHandler(navigation,"Home");
    }, [""]);

    return (
        <ImageBackground style={styles.container} source={images.logoutbg}>
            <View style={styles.dialog}>
                <Text style={styles.logoutMessage}>{text.logoutMessage}</Text>
                <View style={styles.buttonContainer}>
                    <Button style={{ marginRight: fontScale(30) }} text={text.cancle} color="red" width={fontScale(100)} icon={images.cancle} onPress={() => navigation.navigate("Home")} />
                    <Button style={{ marginLeft: fontScale(30) }} text={text.yes} color="green" width={fontScale(100)} icon={images.check} onPress={() => logoutUser()} />
                </View>
            </View>
        </ImageBackground>
    );
}

const Button = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            disabled={props.disabled == true ? true : false}
            style={[
                styles.button,
                props.style,
                { backgroundColor: props.color, flexDirection: "row" }
            ]}>
            <Image source={props.icon} resizeMode="cover" style={styles.icon} />
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
};


export default SignOut;