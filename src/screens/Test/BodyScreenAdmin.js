import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { width } from '../../utils/Dimenssion';
import { fontScale } from '../../utils/Fonts';

const BodyScreenAdmin = (props) => {

    const container = {
        backgroundColor: 'white',
        borderTopLeftRadius: fontScale(50),
        borderTopRightRadius: fontScale(50),
        width: width,
        height: fontScale(50)
    }
    const branchStyle = {
        color: 'white',
        fontSize: 13,
        alignSelf: 'center',
        marginLeft: fontScale(18)
        
    }

    const branchStyleLevel1 = {
        color: 'white',
        fontSize: 13,
        alignSelf: 'center',
        marginLeft: fontScale(140)
        
        
    }
    const districtStyle = {
        color: 'white',
        fontSize: 13,
        alignSelf: 'center',
        marginLeft: fontScale(50)
    }
    const empStyle = {
        color: 'white',
        fontSize: 13,
        alignSelf: 'center',
        marginLeft: fontScale(50)
    }
    return (
        <View>
            <View style={[props.styleFilter, { position: "absolute", top: 20 }]}>
                {
                    props.level === 3 ?
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Text style={branchStyle}>{"Chi nhánh: "}<Text style={{ color: '#CDE5F8' }}>{props.branchCode}</Text></Text>
                            <Text style={districtStyle}>{"Khu vực: "}<Text style={{ color: '#CDE5F8' }}>{props.districtCode}</Text></Text>
                            <Text style={empStyle}>{"NVBH: "}<Text style={{ color: '#CDE5F8' }}>{props.empCode}</Text></Text>
                        </ScrollView >
                        :
                        props.level === 2 ?
                            <ScrollView style={{ marginTop: -fontScale(50), fontSize: 10, alignSelf: 'center' }} horizontal={true} showsHorizontalScrollIndicator={false}>
                                <Text style={branchStyle}>{"Chi nhánh: " + props.branchCode}</Text>
                                <Text style={districtStyle}>{"Khu vực: " + props.districtCode}</Text>
                            </ScrollView > :
                            props.level === 1 ?
                                <ScrollView style={{ marginTop: -fontScale(10), alignSelf: 'center' }} horizontal={true} showsHorizontalScrollIndicator={false}>
                                    <Text style={[branchStyleLevel1 ]}>{"Chi nhánh: " + props.branchCode}</Text>
                                </ScrollView > : ""
                }
            </View>
            <View style={[container, props.style]}></View>
        </View>

    )
}

export default BodyScreenAdmin;