import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/core';
import { fontScale } from '../../utils/Fonts';
import { User } from '../../models/Data';
import { _retrieveData } from '../../utils/Storage';
import { imgUrl } from '../../api/untils';

const Header = (props) => {
    const { title, avatar, fullName, empCode } = props;
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {
                props.profile ? <View style={{ flexDirection: "row" }}>
                    <Image source={{uri: props.avatar}} style={{ width: 50, height: 50, borderRadius: 25, marginLeft: fontScale(10) }} />
                    <View>
                        <Text style={styles.uInfo}>{props.fullName}</Text>
                        <Text style={styles.uStaff}>({props.maGDV})</Text>
                    </View>
                </View> :
                    <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        {props.showBack == false ? <View style={styles.backIcon} /> : <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
                            <Image source={require("../../assets/backicon.png")} />
                        </TouchableOpacity>
                        }
                        <Text style={styles.title}>{title}</Text>
                    </View>
            }
        </View>
    );
}

export default Header;