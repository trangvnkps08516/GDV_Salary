import React from 'react';
import { Text } from 'react-native';
import { Image } from 'react-native';
import { View } from 'react-native';
import { colors } from '../../../utils/Colors';
import { width } from '../../../utils/Dimenssion';
import { fontScale } from '../../../utils/Fonts';

const index = (props) => {
    const { index, fields, numColumn, lastIcon } = props;
    const viewWidth = lastIcon ? (width / numColumn) - fontScale(8) : width / numColumn - fontScale(1);
    return (
        <View
            style={{ flex: 1, backgroundColor: index % 2 ? colors.lightGrey : colors.white, paddingVertical: fontScale(8) }}>
            <View key={index} style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "row" }}>
                    {
                        fields.map((item, i) =>
                            <View style={{ width: viewWidth, justifyContent: "center" }}>
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


export default index;