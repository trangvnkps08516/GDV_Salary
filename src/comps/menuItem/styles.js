import { StyleSheet } from "react-native";
import { colors } from "../../utils/Colors";
import { fontScale } from "../../utils/Fonts";

export const styles = StyleSheet.create({
    container:{

    },
    bg:{
        backgroundColor:colors.white,
        borderRadius:fontScale(15),
        padding:fontScale(10)
    },
    icon:{
        position:"absolute",
        right:fontScale(5),
        top:-fontScale(45)
    },
    title:{
        height:fontScale(60),
        fontSize:fontScale(17),
        marginLeft:fontScale(10),
        fontWeight:"bold",
        textAlignVertical:"center"
    },
    value:{
        textAlign:"right",
        right:fontScale(15),
        fontSize:fontScale(15),
        fontWeight:"bold" ,
        color:"#00BECC"   
    }
})