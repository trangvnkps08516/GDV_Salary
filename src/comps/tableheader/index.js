import React from "react";
import { Text } from "react-native";
import { Image } from "react-native";
import { View } from "react-native";
import { styles } from "./styles";

function TableHeader(props) {
  return (
    <View style={[styles.container, props.style]} key={props.key}>
      {/* <Image source={props.headerIcon} style={[styles.icon, props.styleIcon]} resizeMode="cover" /> */}
      <Text style={[styles.title, props.styleTitle]}>{props.title}</Text>
    </View>
  );
}

export default TableHeader;
