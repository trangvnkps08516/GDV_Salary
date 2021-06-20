// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StatusBar, Text, View, Image } from 'react-native';
import { Input, Button, AuthTitle, MenuItem } from '../../../comps';
import { colors } from '../../../utils/Colors';
import { width } from '../../../utils/Dimenssion';
import { fontScale } from '../../../utils/Fonts';
import { styles } from './style';

const SignIn = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={colors.primary} />
            {/* <View style={styles.bottomShape}>
                <Image source={require("../../../assets/loginbg.png")} resizeMode="stretch" style={styles.trigleShape} />
            </View>
            <View style={{ flex: 1, top: -fontScale(130) }}>
                <Image source={require("../../../assets/mblogo.png")} resizeMode="contain" style={{ width: width * 2 / 3, alignSelf: "center" }} />
            </View>
            <View style={styles.topShape}>
                <AuthTitle title="đăng nhập" style={styles.authTitle} />
                <Input underline title="Username" width={width - fontScale(70)} style={styles.ipUsn} />
                <Input underline pwd title="Mật khẩu" width={width - fontScale(70)} style={styles.ipPwd} />

                <Button width={fontScale(150)} label={"Đăng nhập"} center style={{ marginTop: fontScale(50) }} />
            </View> */}
            <MenuItem value={2000000} style={{marginTop:100}} width={width-50} icon={require("../../../assets/testicon.png")} title="KPI theo tháng" />

        </SafeAreaView>
    );
}

export default SignIn;