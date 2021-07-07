import React, { useEffect, useState } from 'react';
import { View, Text, Modal, TouchableOpacity, TouchableHighlight, Dimensions } from 'react-native';
import { colors } from '../../utils/Colors';
import { height } from '../../utils/Dimenssion';

const MonthYearPicker = (props) => {
    const month_data = [
        { key: 1, name: 'Tháng 01' },
        { key: 2, name: 'Tháng 02' },
        { key: 3, name: 'Tháng 03' },
        { key: 4, name: 'Tháng 04' },
        { key: 5, name: 'Tháng 05' },
        { key: 6, name: 'Tháng 06' },
        { key: 7, name: 'Tháng 07' },
        { key: 8, name: 'Tháng 08' },
        { key: 9, name: 'Tháng 09' },
        { key: 10, name: 'Tháng 10' },
        { key: 11, name: 'Tháng 11' },
        { key: 12, name: 'Tháng 12' },
    ]

    const { width, height } = Dimensions.get('window')

    const [month, setMonth] = useState(props.selectedMonth || month_data[new Date().getMonth()])
    const [year, setYear] = useState(new Date().getFullYear())

    useEffect(() => {
        // props.onChangeYear(year)
        // props.onChangeMonth(month_data[new Date().getMonth()])
    })

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.isShow}
            onRequestClose={props.close}
            style={props.style}
        >
            <TouchableHighlight style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.3)' }} onPress={props.close}>
                <View />
            </TouchableHighlight>
            <View style={{ flex: 1 / 2, backgroundColor: 'white' }} >
                <View style={styles.yearContainer}>
                    <TouchableOpacity onPress={() => {
                        setYear(year - 1)
                        props.onChangeYear(year - 1)
                    }}>
                        <Text>Năm trước</Text>
                    </TouchableOpacity>
                    <Text style={styles.yearLabel}>{year}</Text>
                    <TouchableOpacity onPress={() => {
                        setYear(year + 1)
                        props.onChangeYear(year + 1)
                    }}>
                        <Text>Năm sau</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.monthContainer}>
                    {month_data.map((item, index) =>
                        <TouchableOpacity
                            key={index}
                            onPress={() => {
                                setMonth(item);
                                props.onChangeMonth(month);
                                props.onChangeYear(year);
                                props.onChangeDate(item.name + '/' + year);
                                props.close()
                            }}
                            style={[styles.month, { width: (width / 3), backgroundColor: item.key == month.key ? colors.primary : 'white' }]}>
                            <Text style={{ color: item.key == month.key ? 'white' : 'black' }}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </Modal>
    )
}

const styles = {
    yearContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    monthContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },

    month: {
        height: height/17, alignItems: 'center', justifyContent: 'center',
    },

    yearLabel: {
        fontWeight: 'bold', fontSize: 22,color:colors.primary
    },
}

export default MonthYearPicker