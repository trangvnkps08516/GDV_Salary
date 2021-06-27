import React, { useEffect,useState } from 'react';
import { SafeAreaView, StatusBar, Text, View, Image, TouchableOpacity, BackHandler } from 'react-native';
import { Input, Button, AuthTitle, MenuItem } from '../../../comps';
import { colors } from '../../../utils/Colors';
import { width } from '../../../utils/Dimenssion';
import { fontScale } from '../../../utils/Fonts';
import { styles } from './style';
import { useNavigation } from '@react-navigation/core';
import { images } from '../../../utils/Images';
import { text } from '../../../utils/Text';

const RecoveryPassword = (props) => {
    const [userName, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    const recoveryPassword = async (userName = "", phoneNumber = "") => {
        if (userName.length == 0) {
            setMessage(text.typeYourUsername)
        } else if (phoneNumber.length == 0) {
            setMessage(text.typeYourPassword)
        } else {

        }
    }

    useEffect(() => {
        const backAction = () => {
            navigation.goBack();
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        return () => {
            backHandler.remove();

        }

    }, [navigation])
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={colors.primary} />
            <View style={styles.bottomShape}>
                <Image source={images.loginbg} resizeMode="stretch" style={styles.trigleShape} />
            </View>
            <View style={styles.mbfLogoContainer}>
                <Image source={images.mblogo} resizeMode="contain" style={styles.logo} />
            </View>
            <View style={styles.topShape}>
                <AuthTitle title={text.recoveryPassword} style={styles.authTitle} />
                <Input underline title={text.username} width={width - fontScale(70)} style={styles.ipUsn} />
                <Input underline phone title={text.phoneNumber} width={width - fontScale(70)} style={styles.ipPwd} />
                <Button width={fontScale(150)} label={"Khôi phục"} center style={styles.loginButton} onPress={()=>recoveryPassword(userName,phoneNumber)}/>
                <Text style={{ color: colors.white, textAlign: "center", marginTop: fontScale(15) }}>{message}</Text>
            </View>
        </SafeAreaView>
    );
}

export default RecoveryPassword;