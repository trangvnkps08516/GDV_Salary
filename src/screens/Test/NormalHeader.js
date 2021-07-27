import React, { useEffect, useState } from 'react';
import { Image, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../utils/Colors';
import { height, statusbarHeight, width } from '../../utils/Dimenssion';
import { images } from '../../utils/Images';
import { _retrieveData } from '../../utils/Storage';
import { StyleSheet } from 'react-native';

const NormalHeader = (props) => {
    const [userInfo, setUserInfo] = useState()
    const navigation = useNavigation();

    useEffect(() => {
      
    }, [])
    const {
        showBackIcon,
        showRightIcon,
        extStyle,
        selectOption,
        optionType,
        screenName }
        = props;
    return (
        <View style={[styles.container, extStyle]}>
            {
                showBackIcon == false
                    ?
                    <View style={styles.rightMenu}/>
                    :
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon} >
                        <AntDesign name="left" size={height * 0.0283251231527094} color={colors.white} />
                    </TouchableOpacity>
            }
            <Text style={styles.screenName}>{screenName}</Text>
            {
                showRightIcon == false ? <View style={styles.rightMenu}></View> :
                    <TouchableOpacity onPress={selectOption} style={optionType == "optionUpdate" ? styles.rightUpdateMenu : styles.rightMenu}>
                        <Image source={optionType == "optionUpdate" ? images.upSalary : images.check} resizeMode="contain" style={{ width: height * 0.0283251231527094, height: height * 0.0283251231527094 }} />
                    </TouchableOpacity>
            }
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        width: width,
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 10,
        paddingVertical: statusbarHeight / 2
    },
    backIcon: {
        marginLeft: 5,
        padding: 5,
        marginTop: -5
    },
    screenName: {
        color: '#EAEEEE',
        fontSize: height * 0.0221674876847291,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center'
    },
    rightMenu: {
        marginRight: 10,
        marginTop: 0,
        padding: 5
    },
    rightUpdateMenu: {
        marginRight: 15
    }
});

export default NormalHeader;