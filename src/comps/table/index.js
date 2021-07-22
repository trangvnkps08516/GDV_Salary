import React from 'react';
import { FlatList } from 'react-native';
import { Text } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { LogBox } from 'react-native';
import { Image } from 'react-native';
import { View } from 'react-native';
import { TableRow } from '..';
import { colors } from '../../utils/Colors';
import { fontScale } from '../../utils/Fonts';

const index = (props) => {
    const { data, numColumn, table, headers, headerIcons, headersTextColor, headerStyle, lastIcon, loading } = props;
    
    return (
        <View>
            {
                table ?
                    <View>
                        <View>
                            {
                                headers ?
                                    <View style={{ flexDirection: "row" }}>
                                        {
                                            headerIcons ? headers.map((item, index) => <View style={{ flex: 1, flexDirection: "row", alignItems: "center", paddingHorizontal: fontScale(4) }}>
                                                <Image source={headerIcons[index]} resizeMode="contain" style={{ width: headerStyle.icon.size, height: headerStyle.icon.size }} />
                                                <Text style={{ marginLeft: fontScale(5), color: headersTextColor }}>{item}</Text>
                                            </View>) :
                                                headers.map((item) => <View style={{ flex: 1, paddingHorizontal: fontScale(4) }}>
                                                    <Text style={{ marginLeft: fontScale(5), color: headersTextColor }}>{item}</Text>
                                                </View>)
                                        }
                                        {
                                            lastIcon ? <View style={{ width: fontScale(35) }} /> : null
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
                                                    fields={props.fields}
                                                    numColumn={numColumn}
                                                    lastIcon={lastIcon}
                                                />
                                            )}/>
                                    </View> : null
                            }
                        </View>
                    </View> : null
            }
        </View>
    );
}

export default index;