import React from 'react';
import { Image } from 'react-native';
import { View, TouchableOpacity, TextInput } from 'react-native';
import { colors } from '../../utils/Colors';
import { width } from '../../utils/Dimenssion';
import { fontScale } from '../../utils/Fonts';
import { styles } from './styles';

const Search = (props) => {
    return (
        <View style={[{ flexDirection: 'row',width:props.width,marginHorizontal:width-(width-props.width/12),backgroundColor:"white" }, props.style, styles.homeSearch]}>
            <Image resizeMode="contain" source={props.leftIcon} style={styles.leftIco} />
            <TextInput keyboardType={props.keyboardType} placeholder={props.placeholder} style={[styles.homeSearch, { width: width - fontScale(150) }]} onChangeText={props.onChangeText} placeholderTextColor={colors.grey} />
            <Image resizeMode="contain" source={props.rightIcon} style={styles.rightIco} />
        </View>
    );
}

export default Search;