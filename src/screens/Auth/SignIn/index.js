import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, Text, View, Image, ActivityIndicator, BackHandler } from 'react-native';
import { Input, Button, AuthTitle } from '../../../comps';
import { colors } from '../../../utils/Colors';
import { width } from '../../../utils/Dimenssion';
import { fontScale } from '../../../utils/Fonts';
import { useNavigation } from '@react-navigation/core';
import { styles } from './style';
import { login } from '../../../api';
import { _retrieveData, _storeData } from '../../../utils/Storage';
import { text } from '../../../utils/Text';
import { images } from '../../../utils/Images';
import { checkLogin } from '../../../utils/Logistics';

const SignIn = (props) => {
    const [userName, setUsername] = useState('testCompany')
    const [password, setPassword] = useState('123456')
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    const signIn = async (userName = "", password = "") => {
        if (userName.length == 0) {
            setMessage(text.typeUsername)
        } else if (password.length == 0) {
            setMessage(text.typePassword)
        } else {
            setMessage("")
            setLoading(true);
            await login(userName, password, navigation).then(async (res) => {
                if (res.status == "success") {
                    setLoading(false);
                    // await _retrieveData("userInfo").then((item) => {
                    //     if (item.userId.userGroupId.code == "MBF_GDV") {
                    //         navigation.navigate("GDVHome")
                    //     } else if (item.userId.userGroupId.code == "ADMIN") {
                    //         navigation.navigate("AdminHome")
                    //     } else {
                    //         setMessage("Bạn không có quyền sử dụng app!")
                    //     }
                    // });
                    checkLogin(navigation);

                } else if (res.status == "failed") {
                        setLoading(false)
                        setMessage(res.message)
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
        };

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