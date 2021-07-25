import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { height } from '../../utils/Dimenssion';

export const Button = (props) => {
    return (
      <TouchableOpacity
        onPress={props.onClick}
        disabled={props.disabled == true ? true : false}
        style={[
          styles.button,
          props.style,
          { backgroundColor: props.color, flexDirection: "row" },
        ]}
      >
        <Image source={props.icon} resizeMode="cover" style={[styles.icon,props.iconStyle]} />
        <Text style={[styles.text,props.styleText]}>{props.text}</Text>
      </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create({
    button: {
      width: height * 0.147783251,
      borderRadius: height * 0.012315271,
      alignContent: 'center',
      justifyContent: 'center',
      paddingHorizontal: height * 0.006157635,
      paddingVertical: height * 0.00862069
  },
  icon: {
    width: height * 0.02955665,
    height: height * 0.02955665,
    marginRight: height * 0.009157635
}
  })