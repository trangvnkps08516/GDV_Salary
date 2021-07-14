import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, View, Text, Image, ActivityIndicator } from 'react-native';
import { _removeData, _retrieveData } from '../../../utils/Storage';
import { useNavigation } from '@react-navigation/core';
import { colors } from '../../../utils/Colors';
import { images } from '../../../utils/Images';
import { styles } from './style';
import { height } from '../../../utils/Dimenssion';
import { text } from '../../../utils/Text';

const Splash = (props) => {
    const navigation = useNavigation();

    const getData = async () => {
        await _retrieveData("userInfo").then((data) => {
            if (data != null) {
                setTimeout(() => {
                    navigation.navigate('GDVHome');                    
                }, 3000);
            } else {
                setTimeout(() => {
                    navigation.navigate('SignIn');                    
                }, 3000);
            }
        });
    }

    useEffect(() => {
        getData();
    })
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={colors.primary} />
            <Image source={images.logo} style={styles.logo} />
            <View style={{ flex: 4, justifyContent: "center" }}>
                <Image source={images.splashshape} style={styles.shape} />
            </View>
            <View style={{ flex: 2 }}>
                <Text style={styles.appName}>{text.appName}</Text>
                <ActivityIndicator size="small" color={colors.white} style={styles.loadingIcon} />
            </View>
        </SafeAreaView>
    );
}

export default Splash;