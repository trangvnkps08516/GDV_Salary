import React from 'react';
import { Image } from 'react-native';
import { View, TouchableOpacity, TextInput } from 'react-native';
import { colors } from '../../utils/Colors';
import { styles } from './styles';
function Search(props) {
    return (
        <View style={[{ flexDirection: 'row' }, props.style, styles.homeSearch]}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image resizeMode="contain" source={props.leftIcon} style={styles.leftIco} />
            </TouchableOpacity>
            <TextInput keyboardType={props.keyboardType} placeholder={props.placeholder} style={styles.homeSearch} onChangeText={props.onChangeText} placeholderTextColor={colors.grey} />
            <Image resizeMode="contain" source={props.rightIcon} style={styles.rightIco} />
        </View>
    );
}

export default Search;