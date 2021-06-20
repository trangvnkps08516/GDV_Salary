import React from 'react';
import { SafeAreaView, StatusBar, Text, View, Image, TouchableOpacity } from 'react-native';
import { Input, Button, AuthTitle, MenuItem } from '../../../comps';
import { colors } from '../../../utils/Colors';
import { width } from '../../../utils/Dimenssion';
import { fontScale } from '../../../utils/Fonts';
import { styles } from './style';

function RecoveryPassword(props) {
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
                <AuthTitle title="khôi phục mật khẩu" style={styles.authTitle} />
                <Input underline title="Username" width={width - fontScale(70)} style={styles.ipUsn} />
                <Input underline phone title="Số điện thoại" width={width - fontScale(70)} style={styles.ipPwd} />
                <Button width={fontScale(150)} label={"Khôi phục"} center style={styles.loginButton} />
            </View>
        </SafeAreaView>
    );
}

export default RecoveryPassword;