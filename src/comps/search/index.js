import React, { useEffect, useState } from 'react';
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

const SearchDemo = (props) => {
    const { withDropdown, data, dataNotFoundText, keyboardType, style,main } = props;
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [searchData, setSearchData] = useState(data);
    const [searchValue, setSearchValue] = useState('');
    const [searchAlert, setSearchAlert] = useState(false)

    const onChangeText = (text = '') => {
        setSearchAlert(true)
        let newData = data.filter((item) => {
            const itemData = `${Object.values(item).toString().toLowerCase()}`;
            return itemData.indexOf(text.toString().toLowerCase()) > -1;
        });
        if (text.length > 0) {
            setLoading(true);
            if (newData.length == 0) {
                setLoading(false);
                setMessage(dataNotFoundText);
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

    useEffect(() => {
        if (!data) console.warn("Search Component\nYou must provide the required array of data")
        if (!dataNotFoundText) console.warn("Search Component\nYou must provide 'data not found' text while data was not founded")
    })
    return (
        withDropdown
            ?
            <View style={[style, { width: props.width, alignSelf: "center" }]}>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: colors.white, borderRadius: fontScale(10) }}>
                    <TextInput keyboardType={keyboardType} defaultValue={searchValue} placeholder={props.placeholder} style={[{ flex: 1, padding: fontScale(10), borderRadius: fontScale(10) }]} onChangeText={props.onChangeText, (text) => onChangeText(text)} placeholderTextColor={colors.grey} />
                    <Image source={images.searchlist} resizeMode="cover" style={{ width: fontScale(20), height: fontScale(20), right: fontScale(10) }} />
                </View>
                {message.length > 0 ? <Text style={styles.message}>{message}</Text> : null}
                {loading == true ? <ActivityIndicator color={colors.primary} size="small" /> : null}
                {
                    searchAlert == true ?
                        <FlatList
                            style={{ color: colors.black, backgroundColor: colors.white }}
                            data={searchData}
                            keyExtractor={(item, key) => key.toString()}
                            renderItem={({ item, index }) => {
                                return <TouchableOpacity style={{ width: width, backgroundColor: main==true ? colors.lightGrey : index % 2 == 0 ? colors.lightGrey : colors.white }} onPress={() => [setSearchValue(Object.values(item)[props.searchIndex]), setSearchAlert(!searchAlert), props.onSelectValue(Object.values(item)[props.searchIndex])]}>
                                    <Text style={{ padding: fontScale(10) }}>{Object.values(item)[props.searchIndex]}</Text>
                                </TouchableOpacity>
                            }} />
                        :
                        null
                }
            </View>
            :
            <View style={[{ flexDirection: 'row', width: props.width, marginHorizontal: width - (width - props.width / 12), backgroundColor: "white" }, props.style, styles.homeSearch]}>
                <Image resizeMode="contain" source={props.leftIcon} style={styles.leftIco} />
                <TextInput keyboardType={props.keyboardType} placeholder={props.placeholder} style={[styles.homeSearch, { width: width - fontScale(150) }]} onChangeText={props.onChangeText} placeholderTextColor={colors.grey} />
                <Image resizeMode="contain" source={props.rightIcon} style={styles.rightIco} />
            </View>
    );
}



export default SearchDemo;