import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Image } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { View, TextInput, Text } from 'react-native';
import { colors } from '../../utils/Colors';
import { width } from '../../utils/Dimenssion';
import { fontScale } from '../../utils/Fonts';
import { images } from '../../utils/Images';
import { styles } from './styles';

const Search = (props) => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [searchData, setSearchData] = useState(props.data);
    const [searchValue, setSearchValue] = useState('')

    const onChangeText = (text = '') => {
        let newData = [];
        newData = props.data.filter((item) => {
            const itemData = Object.values(item).toString().toUpperCase();
            return itemData.indexOf(text.toUpperCase()) > -1;
        });
        if (text.length > 0) {
            setLoading(true);
            if (newData.length == 0) {
                setLoading(false);
                setMessage(props.dataNotFoundText);
                setSearchData([]);
            } else {
                setLoading(false);
                setMessage("");
                setSearchData(newData);

            }
        } else {
            setSearchData(props.data);
            setLoading(false);
            setMessage("");
        }
    }
    return (
        props.withDropdown
            ?
            <View style={[props.style,{width:props.width}]}>
                <View style={{ flexDirection: "row",justifyContent:"center",alignItems:"center",backgroundColor:colors.white,borderRadius:fontScale(10) }}>
                    <TextInput keyboardType={props.keyboardType} defaultValue={searchValue} placeholder={props.placeholder} style={[{ flex: 1, padding: fontScale(10) ,borderRadius:fontScale(10)}]} onChangeText={props.onChangeText, (text) => onChangeText(text)} placeholderTextColor={colors.grey} />
                    <Image source={images.searchlist} resizeMode="cover" style={{ width: fontScale(20), height: fontScale(20),right:fontScale(10)}} />
                </View>
                {message.length > 0 ? <Text style={styles.message}>{message}</Text> : null}
                {loading == true ? <ActivityIndicator color={colors.primary} size="small" /> : null}
                <FlatList
                    style={{ color: colors.black, backgroundColor: colors.white }}
                    data={searchData}
                    keyExtractor={(item,key)=>key.toString()}
                    renderItem={({ item, index }) => {
                        return <TouchableOpacity onPress={() => [setSearchValue(props.fieldSearch[index] + ''), props.onSelectValue(props.fieldSearch[index] + '')]}>
                            <Text style={{ padding: fontScale(10), backgroundColor: index % 2 == 0 ? colors.lightGrey : colors.white }}>{item.phoneNumber}</Text>
                        </TouchableOpacity>
                    }} />
            </View>
            :
            <View style={[{ flexDirection: 'row', width: props.width, marginHorizontal: width - (width - props.width / 12), backgroundColor: "white" }, props.style, styles.homeSearch]}>
                <Image resizeMode="contain" source={props.leftIcon} style={styles.leftIco} />
                <TextInput keyboardType={props.keyboardType} placeholder={props.placeholder} style={[styles.homeSearch, { width: width - fontScale(150) }]} onChangeText={props.onChangeText} placeholderTextColor={colors.grey} />
                <Image resizeMode="contain" source={props.rightIcon} style={styles.rightIco} />
            </View>
    );
}

export default Search;