import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/core';
import { fontScale } from '../../utils/Fonts';
import { User } from '../../models/Data';
import { _retrieveData } from '../../utils/Storage';
import { images } from '../../utils/Images';

const Header = (props) => {
    const { title} = props;
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {
                props.profile
                    ?
                    <View style={{ flexDirection: "row" }}>
                        <Image source={props.avatar} style={styles.avatar} />
                        <View>
                            <Text style={styles.uInfo}>{props.fullName}</Text>
                            <Text style={styles.uStaff}>({props.maGDV})</Text>
                        </View>
                    </View>
                    :
                    <View style={styles.headNotProfile}>
                        {
                            props.showBack == false
                                ?
                                <View style={styles.backIcon} />
                                :
                                <TouchableOpacity style={styles.backIcon} onPress={() => [navigation.goBack(), props.onPushParams]}>
                                    <Image source={images.back} style={styles.backIconImg} />
                                </TouchableOpacity>
                        }
                        <Text style={styles.title}>{title}</Text>
                    </View>
            }
        </View>
    );
}

export default Header;