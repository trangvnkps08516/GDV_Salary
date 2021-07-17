import React from "react";
import { FlatList } from "react-native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const ListMenu = (props) => {
  const { title, icon, onPress, style, width, value, view, data } = props;
  return (
    <View
      style={[
        style,
        {
          width: width,
          marginBottom: 10,
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
    >
      {/* view ? <View style={styles.container} onPress={onPress}>
                    <View style={styles.bg}>
                    <Text style={[styles.title,props.titleStyle]}>{title}</Text>
                        <Image source={icon} style={styles.icon} />
                        {
                            value ? <Text style={styles.value}>{value}</Text> : null
                        }
                    </View>
                </View> :
                 */}

      <TouchableOpacity style={styles.container}>
        <View style={styles.bg}>
          <Text>{props.fieldData[0]}</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              {props.labelData.map((item) => (
                <Text>{item}</Text>
              ))}
            </View>
            <View style={{ flex: 3 }}>
              {props.fieldData.map((item, index) =>
                props.lastIcon && index == props.fieldData.length - 1 ? (
                  <Image
                    source={props.lastIcon}
                    resizeMode="contain"
                    style={{ width: 10, height: 10 }}
                  />
                ) : (
                  <Text>{index == 0 ? "" : item}</Text>
                )
              )}
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <Image source={props.icon} style={styles.icon}></Image>
    </View>
  );
};

export default ListMenu;
