import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { Text } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native';
import { Image } from 'react-native';
import { View } from 'react-native';
import { colors } from '../../utils/Colors';
import { fontScale } from '../../utils/Fonts';
import TableRow from "./tablerow/index";

const index = (props) => {
    const { data, numColumn, table, headers, headerIcons, headersTextColor, headerStyle, lastIcon, loading, widthArray, lastIconHeader, main, style } = props;
    useEffect(() => {
        if (!data) {
            console.warn("Table Component\nYou must provide the required array of data")
        }
        if (!numColumn) {
            console.warn("Table Component\nYou must be provide numColumn variable")
        }
        if (!widthArray) {
            console.warn("Table Component\nYou must be provide widthArray variable")
        }
        if (numColumn != widthArray.length) {
            console.warn("Table Component\nThe numColumn must be equal to number of element in widthArray")
        }
        if (headerIcons && numColumn != headerIcons.length) {
            console.warn("Table Component\nThe numColumn must be equal to number of element in headerIcons")
        }
    })
    return (
        <View>
            {
                table ?
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={style}>
                        <View>
                            {
                                headers ?
                                    <View style={{ flexDirection: "row" }}>
                                        {
                                            headerIcons ? headers.map((item, index) => <View key={index} style={{ width: widthArray && widthArray[index], flexDirection: "row", alignItems: "center", paddingHorizontal: fontScale(4) }}>
                                                <Image source={headerIcons[index]} resizeMode="contain" style={{ width: headerStyle.icon.size, height: headerStyle.icon.size }} />
                                                <Text style={{ marginLeft: fontScale(5), color: headersTextColor, fontWeight: "bold" }}>{item}</Text>
                                            </View>) :
                                                headers.map((item) => <View style={{ flex: 1, paddingHorizontal: fontScale(4) }}>
                                                    <Text style={{ marginLeft: fontScale(5), color: headersTextColor, fontWeight: "bold" }}>{item}</Text>
                                                </View>)
                                        }
                                        {
                                            lastIcon ? <View style={{ width: fontScale(35) }}><Image source={lastIconHeader} resizeMode="cover" style={{ width: headerStyle.icon.size, height: headerStyle.icon.size }} /></View> : null
                                        }
                                    </View> : null
                            }
                            {
                                loading == true ? <ActivityIndicator style={{ marginTop: fontScale(20) }} size="small" color={colors.primary} /> : null
                            }
                            {
                                data ?
                                    <FlatList
                                        showsVerticalScrollIndicator={false}
                                        data={data}
                                        style={{ marginTop: fontScale(10) }}
                                        keyExtractor={(item, index) => index.toString()}
                                        key={({ item }) => item.numberSub.toString()}
                                        renderItem={({ item, index }) => (
                                            <TableRow
                                                item={item}
                                                index={index}
                                                widthArray={widthArray && widthArray}
                                                fields={props.fields}
                                                numColumn={numColumn}
                                                main={main}
                                                lastIcon={lastIcon} />
                                        )} /> : null
                            }
                        </View>
                    </ScrollView> : null
            }
        </View>
    );
}

export default index;