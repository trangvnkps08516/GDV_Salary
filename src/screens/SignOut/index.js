import React from 'react';
import { View, Text, ImageBackground, Image, Modal, TouchableOpacity, BackHandler } from 'react-native';
import { signoutUser } from '../../api';
import { fontScale } from '../../utils/Fonts';
import { images } from '../../utils/Images';
import { text } from '../../utils/Text';
import { useNavigation } from '@react-navigation/core';
import { styles } from './styles';
import { useState } from 'react';
import { useIsFocused } from "@react-navigation/native";
import { useEffect } from 'react';

const SignOut = (props) => {
    const navigation = useNavigation();
    const [showAlert, setShowAlert] = useState(true)
    const isFocused = useIsFocused();

    const logoutUser = async () => {
        await signoutUser(navigation);
        navigation.navigate('Home');
        navigation.navigate('SignIn');
    }
    useEffect(() => {
        const backAction = () => {
            navigation.navigate('Home');
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        
        return () => {
            backHandler.remove();
        };

    }, [""]);

    return (
        <ImageBackground style={styles.container} source={images.logoutbg}>
            <View style={styles.dialog}>
                <Text style={styles.logoutMessage}>{text.logoutMessage}</Text>
                <View style={styles.buttonContainer}>
                    <Button style={{ marginRight: fontScale(30) }} text="Hủy" color="red" width={fontScale(100)} icon={images.cancle} onPress={()=>navigation.navigate("Home")}/>
                    <Button style={{ marginLeft: fontScale(30) }} text="Có" color="green" width={fontScale(100)} icon={images.check} onPress={() => logoutUser()} />
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
            ]}
        >
            <Image source={props.icon} resizeMode="cover" style={styles.icon} />
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
};


export default SignOut;