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

      <TouchableOpacity style={styles.container} onPress={props.onPress}>
        <View style={styles.bg}>
          <Text style={styles.fieldData}>{props.fieldData[0]}</Text>
          <View>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <View style={{ flexDirection: "row", flex: 1 }}  key={Math.random()}>
                {props.labelData.map((item, index) => (
                  <Text style={styles.labelDataOne} key={Math.random()}>{item}</Text>
                ))}
                {props.fieldDataOne.map((item, index) => (
                  <Text style={styles.fieldDataOne} key={Math.random()}>{item}</Text>
                ))}
              </View>
              <View style={{ flexDirection: "row", flex: 0.8 }}>
                {props.labelDataTwo.map((item, index) => (
                  <Text style={styles.labelDataTwo} key={Math.random()}>{item}</Text>
                ))}
                {props.fieldDataTwo.map((item, index) => (
                  <Text style={styles.fieldDataTwo} key={Math.random()}>{item}</Text>
                ))}
              </View>
              <View style={{ flexDirection: "row", flex: 0.8 }}>
                {props.labelDataThree.map((item, index) => (
                  <Text style={styles.labelDataThree} key={Math.random()}>{item}</Text>
                ))}
                {props.fieldDataThree.map((item, index) => (
                  <Text style={styles.fieldDataThree} key={Math.random()}>{item}</Text>
                ))}
              </View>
              <View style={{ flexDirection: "row", flex: 0.8 }}>
                {props.labelDataFour.map((item, index) => (
                  <Text style={styles.labelDataFour} key={Math.random()}>{item}</Text>
                ))}
                {props.fieldDataFour.map((item, index) => (
                  <Text style={styles.fieldDataFour} key={Math.random()}>{item}</Text>
                ))}
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      { props.iconOne ? <Image source={props.icon} style={styles.icon} />
        :
        <Image source={props.icon[props.index]} style={styles.icon} />
      }


    </View>
  );
};

export default ListMenu;
