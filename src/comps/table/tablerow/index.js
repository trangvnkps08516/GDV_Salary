import React from 'react';
import { Text } from 'react-native';
import { Image } from 'react-native';
import { View } from 'react-native';
import { colors } from '../../../utils/Colors';
import { fontScale } from '../../../utils/Fonts';
import {styles} from "./styles";
const TableRow = (props) => {
    const { index, fields, numColumn, lastIcon,widthArray,main } = props;
    return (
        <View
            style={[styles.container,{backgroundColor: main&&main[index]===true ? colors.lightGrey : !main&&index % 2 ? colors.lightGrey : colors.white }]}>
            <View key={index} style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "row" }}>
                    {   
                        fields.map((item, i) =>
                            <View key={i} style={{ width: widthArray&&widthArray[i], justifyContent: "center" }}>
                                <Text style={{ fontSize: fontScale(14), textAlignVertical: "center", marginLeft: fontScale(5) }}>{fields[index][i]}</Text>
                                {lastIcon ? i == numColumn ?
                                    <View style={{width: fontScale(10), height: fontScale(10) }}>
                                        <View style={{ marginTop: -fontScale(10), position: "absolute", left: fontScale(3) }}>
                                            <Image source={lastIcon} resizeMode="contain" style={{ width: fontScale(13), height: fontScale(13), marginHorizontal: fontScale(5), marginTop: -fontScale(5) }} />
                                        </View>
                                    </View>
                                    : null : null}
                            </View>
                        )
                    }
                </View>
            </View>
        </View>
    );
}


export default TableRow;