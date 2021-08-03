import React from 'react';
import { Image, TextInput, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { height } from '../../utils/Dimenssion';
import { colors } from '../../utils/Colors';
import { StyleSheet } from 'react-native';

const SearchBar = (props) => {
    return (
        props.selectPicker
            ?
            <TouchableOpacity style={[styles.container, props.style]} onPress={props.onShowSelect}>
                <Image source={props.leftIcon} style={styles.leftIcon} resizeMode="cover" />
                <Text style={{ fontSize: height * 0.0184729064039409, color: '#C6D8D7', fontWeight: 'bold', flex: 1, marginRight: 55, marginLeft: height * 0.0677339901477833 }}>{props.placeholder}</Text>
                <AntDesign name="search1" size={height * 0.0303349753694581} color={colors.black} style={styles.searchIcon} />
            </TouchableOpacity>
            :
            <View style={[styles.container, props.style]}>
                <Image source={props.leftIcon} style={styles.leftIcon} />
                <TextInput autoCorrect={false} keyboardType={props.inputType} placeholder={props.placeholder} onChangeText={props.onChangeText} value={props.value} defaultValue={props.defaultValue} placeholderTextColor="#C6D8D7"
                    style={{ paddingLeft: 5, fontSize: height * 0.0197044334975369, color: '#C6D8D7', fontWeight: 'bold', flex: 1, marginRight: 55, marginLeft: height * 0.0677339901477833 }, [props.textInputStyle]} />
                <AntDesign name="search1" size={height * 0.0270935960591133} color={colors.black} style={styles.searchIcon} />
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:colors.white,
        height:0.053756157635468*height,
        alignItems:'center',
        borderRadius:height*0.0160098522167488
    },
    leftIcon:{
        marginVertical:height*0.0061576354679803,
        marginHorizontal:height*0.0091576354679803,
        width:height*0.0303349753694581,
        height:height*0.0303349753694581
    },
    searchIcon:{
        position:'absolute',
        right:height*0.0013891625615764,
        margin:height*0.0071428571428571
    }
})

export default SearchBar;