import React, { useEffect, useState } from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import MonthYearPicker from 'react-native-simple-month-year-picker';
import { images } from '../../utils/Images';
import { colors } from '../../utils/Colors';
import { fontScale } from '../../utils/Fonts';

const YearMonthPicker = (props) => {
    const [isShow, setIsShow] = useState(false);
    const [year, setYear] = useState(null);
    const [month, setMonth] = useState(null);
    const [date, setDate] = useState('');

    return (
        <View>
            <TouchableOpacity key={(index: any) => index} onPress={() => setIsShow(!isShow)} style={[styles.selectedDate, { width: props.width, marginTop: props.top,height:props.height }, props.style]}>
                {
                    <Text style={[styles.selectedMonth, { width: props.width - 21 }]}>{typeof(props.date)=='undefined' ? 'Tháng '+props.defaultDate: 'Tháng '+props.date}</Text>
                }
                {/* <Text style={[styles.selectedMonth, { width: props.width - 21, marginRight: 21 }]}>Tháng {props.defaultValue ? props.defaultValue : JSON.stringify(month+'/'+year)}</Text> */}
                <Image source={images.dropdown} resizeMode="cover" style={styles.dropIcon} />
            </TouchableOpacity>

            <MonthYearPicker
                isShow={isShow}
                yearLabel={props.yearLabel}
                close={() => setIsShow(false)} //setState isShow to false
                onChangeYear={(year) => setYear(year) }
                onChangeMonth={(month) => setMonth(month) }
                onChangeText={(date) => setDate(date) }
                onChangeDate={(date) => {props.onChangeDate(date);setDate(date)} }
            />
        </View>



    );
}
const styles = StyleSheet.create({
    selectedDate: {
        backgroundColor: colors.white,
        padding: fontScale(5),
        height:fontScale(39),
        borderRadius: fontScale(5),
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectedMonth: {
        textAlign: 'center',
        marginRight:fontScale(7),
        textAlignVertical: 'center',
        color: '#C2B60E',
        fontSize:fontScale(14),
        fontWeight: 'bold'
    },
    dropIcon: {
        width: fontScale(14),
        height: fontScale(14),
        right: 0,
        position: 'absolute',
        margin: (25 / 2) - 4
    }
})
export default YearMonthPicker;
