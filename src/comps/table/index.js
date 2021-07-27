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
    const { data, numColumn, table, headers, headerIcons, headersTextColor, headerStyle, lastIcon, loading,widthArray } = props;
    useEffect(()=>{
        if(!numColumn){
            console.warn("You must be provide numColumn variable")
        }
        if(!widthArray){
            console.warn("You must be provide widthArray variable")
        }
        if(numColumn!=widthArray.length){
            console.warn("The numColumn must have as same as number of element in widthArray")
        }
        if(headerIcons&&numColumn!=headerIcons.length){
            console.warn("The numColumn must have as same as number of element in headerIcons")
        }
    })
    return (
        <View>
            {
                table ?
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View>
                            {
                                headers ?
                                    <View style={{ flexDirection: "row" }}>
                                        {
                                            headerIcons ? headers.map((item, index) => <View style={{ width:widthArray&&widthArray[index], flexDirection: "row", alignItems: "center", paddingHorizontal: fontScale(4) }}>
                                                <Image source={headerIcons[index]} resizeMode="contain" style={{ width: headerStyle.icon.size, height: headerStyle.icon.size }} />
                                                <Text style={{ marginLeft: fontScale(5), color: headersTextColor }}>{item}</Text>
                                            </View>) :
                                                headers.map((item) => <View style={{ flex: 1, paddingHorizontal: fontScale(4) }}>
                                                    <Text style={{ marginLeft: fontScale(5), color: headersTextColor }}>{item}</Text>
                                                </View>)
                                        }
                                        {
                                            lastIcon ? <View style={{ width: fontScale(35) }}><Image source={lastIcon} resizeMode="cover" style={{width:20,height:20}}/></View> : null
                                        }
                                    </View> : null
                            }
                            {
                                loading == true ? <ActivityIndicator style={{ marginTop: fontScale(20) }} size="small" color={colors.primary} /> : null
                            }
                            {
                                data ?
                                    <View>
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
                                                    widthArray={widthArray&&widthArray}
                                                    fields={props.fields}
                                                    numColumn={numColumn}
                                                    lastIcon={lastIcon}
                                                />
                                            )}/>
                                    </View> : null
                            }
                        </View>
                    </ScrollView> : null
            }
        </View>
    );
}

export default index;