import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, View, Text, Image, ActivityIndicator } from 'react-native';
import { _removeData, _retrieveData } from '../../../utils/Storage';
import { useNavigation } from '@react-navigation/core';
import { colors } from '../../../utils/Colors';
import { images } from '../../../utils/Images';
import { styles } from './style';
import { useState } from 'react';

const Splash = (props) => {
    const navigation = useNavigation();
    const [isLoggedIn, setIsLoggedIn] = useState();
    const getData = async () => {
        await _retrieveData("userInfo").then((data) => {
            navigation.navigate('SignIn')                    
        });
    }


    useEffect(() => {
        getData();
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