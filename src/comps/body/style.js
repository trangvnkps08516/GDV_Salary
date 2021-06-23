import { StyleSheet } from "react-native";
import { colors } from "../../utils/Colors";
import { fontScale } from "../../utils/Fonts";

export const styles = StyleSheet.create({
    userInfo:{
        textAlign:"center",
        fontSize:fontScale(16),
        fontWeight:"bold",
        color:colors.white
    },
    container:{
        flex:1,
        backgroundColor:colors.primary    
    },
    body:{
        backgroundColor:colors.white,
        flex:1
    }
})