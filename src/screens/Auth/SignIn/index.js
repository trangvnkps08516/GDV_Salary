import React, { useState } from 'react';
import { SafeAreaView, StatusBar, Text, View, Image, TouchableOpacity } from 'react-native';
import { Input, Button, AuthTitle, MenuItem } from '../../../comps';
import { colors } from '../../../utils/Colors';
import { width } from '../../../utils/Dimenssion';
import { fontScale } from '../../../utils/Fonts';
import { useNavigation } from '@react-navigation/core';
import { styles } from './style';
import { login } from '../../../api';

const SignIn = (props) => {
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message,setMessage] = useState('')
    const navigation = useNavigation();

    const signIn = async (userName, password) => {
        await login(userName, password).then((data) => {
            if(data.status=="success"){
                navigation.navigate('Home')
            }
            if(data.status=="failed"){
                setMessage(data.message)
            }
        })
    }
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
                <Input underline title="Username" width={width - fontScale(70)} style={styles.ipUsn}
                    onChangeText={(value) => [setUsername(value),setMessage('')]} />
                <Input underline pwd title="Mật khẩu" width={width - fontScale(70)} style={styles.ipPwd}
                    onChangeText={(value) => [setPassword(value),setMessage('')]} />
                <View style={{ alignSelf: "flex-end", top: 20 }}>
                    <TouchableOpacity style={styles.forgotTextContainer}>
                        <Text style={styles.forgotText}>Quên mật khẩu</Text>
                    </TouchableOpacity>
                </View>
                <Button width={fontScale(150)} label={"Đăng nhập"} center style={styles.loginButton} onPress={() => signIn(userName, password)} />
                <Text style={{color:colors.white,textAlign:"center",marginTop:fontScale(15)}}>{message}</Text>

            </View>
        </SafeAreaView>
    );
}

export default SignIn;