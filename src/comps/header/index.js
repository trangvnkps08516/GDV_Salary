import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/core';

const Header = (props) => {
    const { title } = props;
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
                    <Image source={require("../../assets/backicon.png")} />
                </TouchableOpacity>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
}

export default Header;