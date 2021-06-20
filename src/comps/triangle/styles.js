import { StyleSheet } from "react-native";
import { width } from "../../utils/Dimenssion";

export const styles = StyleSheet.create({
        container:{
            width: 0,
            height: 0,
            backgroundColor: 'transparent',
            borderStyle: 'dotted',
            borderRightWidth: width,
            borderTopWidth: width,
            borderRightColor: 'transparent',
            borderTopColor: 'white'
         }
})