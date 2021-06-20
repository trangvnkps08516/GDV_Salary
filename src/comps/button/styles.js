import { StyleSheet } from "react-native";
import { colors } from "../../utils/Colors";
import { fontScale } from "../../utils/Fonts";

export const styles = StyleSheet.create({
    container:{
        borderColor:colors.white,
        borderWidth:1,
        padding:fontScale(10),
        justifyContent:"center",
        borderRadius:fontScale(10),
        backgroundColor:"#33A3FB"
    },
    label:{
        textAlign:"center",
        fontWeight:"bold",
        color:colors.white,
        textTransform:"uppercase"
    }
})