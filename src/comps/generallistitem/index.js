import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Image, View, Text } from 'react-native';
import { colors } from '../../utils/Colors';
import { fontScale } from '../../utils/Fonts';
import { styles } from './styles';

const GeneralListItem = (props) => {
  return (
    props.columns ? props.onPress ?
      <TouchableOpacity style={[styles.container, props.style]}>
        {
          props.rightIcon ? <Image source={props.rightIcon} resizeMode="contain" style={{ width: fontScale(40), height: fontScale(40), position: "absolute", right: fontScale(20), top: -fontScale(20) }} /> : null
        }
        <Text style={{ fontSize: fontScale(18), color: "#2e2e31", fontWeight: "bold", marginLeft: fontScale(22), marginRight: fontScale(11), marginVertical: fontScale(11) }}>{props.title}</Text>
        <View style={{ flexDirection: "row" }}>
          {
            props.titleArray.map((item, index) => <View style={{ flex: 1 }} >
              <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: fontScale(12), color: colors.grey }}>{item}</Text>
              <Text style={{ textAlign: "center", fontWeight: "bold", color: colors.primary, fontSize: fontScale(14) }}>{props.item[index]}</Text>
            </View>)
          }
        </View>

      </TouchableOpacity>
      :

      <View style={[styles.container, props.style]}>
        {
          props.rightIcon ? <Image source={props.rightIcon} resizeMode="contain" style={{ width: fontScale(40), height: fontScale(40), position: "absolute", right: fontScale(20), top: -fontScale(20) }} /> : null
        }
        <Text style={{ fontSize: fontScale(18), color: "#2e2e31", fontWeight: "bold", marginLeft: fontScale(22), marginRight: fontScale(11), marginVertical: fontScale(11) }}>{props.title}</Text>
        <View style={{ flexDirection: "row" }}>
          {
            props.titleArray.map((item, index) => <View style={{ flex: 1 }} >
              <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: fontScale(12), color: colors.grey }}>{item}</Text>
              <Text style={{ textAlign: "center", fontWeight: "bold", color: colors.primary, fontSize: fontScale(14) }}>{props.item[index]}</Text>
            </View>)
          }
        </View>

      </View>
      : <View
        style={{ backgroundColor: props.index % 2 ? colors.lightGrey : colors.white, paddingVertical: 8 }}    >
        <View style={{ flexDirection: "row" }} key={props.index}>
          {
            props.fields.map((item, index) => {
              return props.lastIcon && index == props.fields.length - 1
                ? <View style={props.lastIconViewStyle} key={index}><Image resizeMode="contain" style={props.lastIconStyle} source={props.lastIcon} /></View>
                : <Text style={props.style[index]} key={index}>{item}</Text>
            })
          }
        </View>
      </View>
  );
}

export default GeneralListItem;