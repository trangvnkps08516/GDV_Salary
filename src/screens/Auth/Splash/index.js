import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, View, Text, Image, ActivityIndicator } from 'react-native';
import { _removeData, _retrieveData } from '../../../utils/Storage';
import { useNavigation } from '@react-navigation/core';
import { colors } from '../../../utils/Colors';
import { images } from '../../../utils/Images';

const Splash = (props) => {
    const navigation = useNavigation();

    const init = async () => {
       setTimeout(() => {
           navigation.navigate('SignIn')
       }, 3000);

    }

    useEffect(() => {
        init();
    })
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={colors.primary} />
            <View>
                <Image source={images.logo} style={styles.logo} />
                <Image source={images.splashshape} style={styles.shape} />
                <Text style={styles.appName}>Giao dịch viên</Text>
            </View>
            <ActivityIndicator size="small" color={colors.white} style={styles.loadingIcon} />
        </SafeAreaView>
    );
}

export default Splash;