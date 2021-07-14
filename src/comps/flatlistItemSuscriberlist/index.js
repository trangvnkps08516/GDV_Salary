import React from 'react';
import { Image, View, Text } from 'react-native';
import { colors } from '../../utils/Colors';
import { width } from '../../utils/Dimenssion';
import { fontScale } from '../../utils/Fonts';
import { images } from '../../utils/Images';

function FlatlistItem(props) {
  return (
    <View
      style={{
        backgroundColor: props.index % 2 ? colors.lightGrey : colors.white,
        paddingVertical: 8
      }}    >
      <View style={{ flexDirection: "row" }}>
      
        <Text style={{ width:width*2/10, textAlign:"center", fontSize: fontScale(14)}}>{props.item.date}</Text>
      <Text style={{ width:width*2.6/10, textAlign:"center",textAlignVertical: "center", fontSize: fontScale(14)  }} >{props.item.numberSub}</Text>
      <Text style={{ width:width*1.7/10, textAlign:"center",textAlignVertical: "center", fontSize: fontScale(14)  }} >{props.item.statusPaid}</Text>
      <Text style={{ width:width*2.5/10, textAlign:"center",textAlignVertical: "center", fontSize: fontScale(14)  }} >{props.item.type}</Text>
      <View style={{ width:width*1.1/10,  justifyContent: "center", alignItems: "center", fontSize: fontScale(14)}}>
     <Image resizeMode="contain" style={{ flex: 0.5, alignSelf:"center", width:fontScale(15),height:fontScale(19) }} source={props.item.pckSub == 1 ? images.check : images.cancle} />
      </View> 
       
      </View>
    </View>
  );
}

export default FlatlistItem;