import { StyleSheet } from "react-native";
import { colors } from "../../utils/Colors";
import { statusbarHeight, width } from "../../utils/Dimenssion";
import { fontScale } from "../../utils/Fonts";

export const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        flexDirection:"row",
        paddingVertical:fontScale(5),
        marginTop:statusbarHeight
    },
    backIcon:{
        width:fontScale(50),
        left:-fontScale(50)
    },
    title:{
        textAlign:"center",
        fontSize:fontScale(17),
        fontWeight:"bold",
        marginLeft:-fontScale(50),
        color:colors.white,
        width:width-fontScale(100),
        height:fontScale(50),
        paddingVertical:fontScale(13)
    }
})