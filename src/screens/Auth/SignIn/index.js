import React from 'react';
import { SafeAreaView, StatusBar, Text, View, Image, TouchableOpacity } from 'react-native';
import { Input, Button, AuthTitle, MenuItem } from '../../../comps';
import { colors } from '../../../utils/Colors';
import { width } from '../../../utils/Dimenssion';
import { fontScale } from '../../../utils/Fonts';
import { useNavigation } from '@react-navigation/core';
import { styles } from './style';

const SignIn = (props) => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={colors.primary} />
            <View style={styles.bottomShape}>
                <Image source={require("../../../assets/loginbg.png")} resizeMode="stretch" style={styles.trigleShape} />
            </View>
            <View style={styles.mbfLogoContainer}>
                <Image source={require("../../../assets/mblogo.png")} resizeMode="contain" style={styles.logo} />
            </View>
            <View style={styles.topShape}>
                <AuthTitle title="đăng nhập" style={styles.authTitle} />
                <Input underline title="Username" width={width - fontScale(70)} style={styles.ipUsn} />
                <Input underline pwd title="Mật khẩu" width={width - fontScale(70)} style={styles.ipPwd} />
                <View style={{ alignSelf: "flex-end", top: 20 }}>
                    <TouchableOpacity style={styles.forgotTextContainer}>
                        <Text style={styles.forgotText}>Quên mật khẩu</Text>
                    </TouchableOpacity>
                </View>
                <Button width={fontScale(150)} label={"Đăng nhập"} center style={styles.loginButton} onPress={()=>navigation.navigate('Home')}/>
            </View>
        </SafeAreaView>
    );
}

export default SignIn;