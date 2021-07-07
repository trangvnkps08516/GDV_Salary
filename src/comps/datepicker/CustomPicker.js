import React, { useEffect, useState } from 'react';
import { View, Text, Modal, TouchableOpacity, TouchableHighlight, Dimensions } from 'react-native';
import { colors } from '../../utils/Colors';
import { height } from '../../utils/Dimenssion';

const CustomPicker = (props) => {
    const month_data = props.month_data

    const { width, height } = Dimensions.get('window')

    const [month, setMonth] = useState(month_data[props.defaultMonth])
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
                            style={[styles.month, { width: (width / 3), backgroundColor: item.key == month_data[0] ? colors.primary : 'white' }]}>
                            <Text style={{ color: item.key == month_data[0] ? 'white' : 'black' }}>{item.name}</Text>
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

export default CustomPicker
