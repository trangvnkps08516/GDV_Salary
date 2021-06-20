import { StyleSheet } from "react-native";
import { colors } from "../../utils/Colors";
import { fontScale } from "../../utils/Fonts";

export const styles = StyleSheet.create({
    userInfo:{
        textAlign:"center",
        fontSize:fontScale(13),
        fontWeight:"bold",
        color:colors.white
    }
})