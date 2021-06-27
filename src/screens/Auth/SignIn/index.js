import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Input, Button, AuthTitle, MenuItem } from '../../../comps';
import { colors } from '../../../utils/Colors';
import { width } from '../../../utils/Dimenssion';
import { fontScale } from '../../../utils/Fonts';
import { useNavigation } from '@react-navigation/core';
import { styles } from './style';
import { login } from '../../../api';
import { _retrieveData, _storeData } from '../../../utils/Storage';
import { text } from '../../../utils/Text';
import { images } from '../../../utils/Images';

const SignIn = (props) => {
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    const signIn = async (userName = "", password = "") => {
        if (userName.length == 0) {
            setMessage("Vui lòng nhập Username!")
        } else if (password.length == 0) {
            setMessage("Vui lòng nhập mật khẩu!")
        } else {
            setMessage("")
            await login(userName, password).then(async (data) => {
                if (data.status == "success") {
                    setLoading(false);
                    await _storeData("userInfo", data.res)
                    navigation.navigate('Home');
                }
                if (data.status == "failed") {
                    setLoading(false)
                    setMessage(data.message)
                }
            });
        }
    }

    useEffect(() => {
        const backAction = () => {
            BackHandler.exitApp();
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
            <StatusBar backgroundColor={colors.primary} translucent />
            <View style={styles.bottomShape}>
                <Image source={images.loginbg} resizeMode="stretch" style={styles.trigleShape} />
            </View>
            <View style={styles.mbfLogoContainer}>
                <Image source={images.mblogo} resizeMode="contain" style={styles.logo} />
            </View>
            <View style={styles.topShape}>
                <AuthTitle title={text.login} style={styles.authTitle} />
                <Input underline title={text.username} width={width - fontScale(70)} style={styles.ipUsn}
                    onChangeText={(value) => [setUsername(value), setMessage('')]} />
                <Input underline pwd title={text.password} width={width - fontScale(70)} style={styles.ipPwd}
                    onChangeText={(value) => [setPassword(value), setMessage('')]} />
                <Button width={fontScale(150)} label={"Đăng nhập"} center style={styles.loginButton} onPress={() => signIn(userName, password)} />
                <Text style={{ color: colors.white, textAlign: "center", marginTop: fontScale(15) }}>{message}</Text>
                {loading == true ?
                    <ActivityIndicator size="small" color={colors.white} /> : null}
            </View>
        </SafeAreaView>
    );
}

export default SignIn;