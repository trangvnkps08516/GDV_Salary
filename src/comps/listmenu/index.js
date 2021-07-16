import React from "react";
import { FlatList } from "react-native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const ListMenu = (props) => {
  const { title, icon, onPress, style, width, value, view, data } = props;
  return (
    <View style={[style, { width: width,marginBottom:10,justifyContent:"center",alignItems:"center" }]}>
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
        {/* <Text>{props.data.titleMain}</Text>         */}
          <FlatList 
              data={props.data.list}
              renderItem={({item}) => <View style={{flexDirection:"row"}}>
                <Text>{item.title}{item.content}</Text>
                {/* <Text>{item.content}</Text> */}
            </View>}
          />
        </View>
      </TouchableOpacity>
      <Image source={props.icon} style={styles.icon}></Image>
    </View>
  );
};

export default ListMenu;
