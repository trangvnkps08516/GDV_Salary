import React, { useEffect, useState } from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { images } from '../../utils/Images';
import { colors } from '../../utils/Colors';
import { fontScale } from '../../utils/Fonts';
import MonthYearPicker from 'react-native-simple-month-year-picker';
import { styles } from './styles';

const YearMonthPicker = (props) => {
    const [month, setMonth] = useState(null);
    const [showDate, setShowDate] = useState(false)

    return (
        <View>
            <TouchableOpacity style={[{ flexDirection:"row",backgroundColor: "#fff",borderRadius:fontScale(8), padding: fontScale(10), width: props.width },props.style]} onPress={() => setShowDate(!showDate)}>
                <Text style={{textAlign:"center",flex:1,color:colors.darkYellow,fontWeight:"bold"}}>{month == null ? 'Tháng ' + props.month : month}</Text>
                <Image source={images.dropdown} style={{position:"absolute",right:0,margin:fontScale(12)}}/>
            </TouchableOpacity>

            <MonthYearPicker
                isShow={showDate}
                close={() => setShowDate(false)}
                onChangeYear={(year) => { }}
                onChangeMonth={(month) => { }}
                onChangeText={(date) => { }}
                onChangeDate={(date) => { setMonth(date); props.onChangeDate(date.substring(6, date.length)) }}
            />
        </View>
    );
}

export default YearMonthPicker;
