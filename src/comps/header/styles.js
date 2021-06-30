import { StyleSheet } from "react-native";
import { colors } from "../../utils/Colors";
import { statusbarHeight, width } from "../../utils/Dimenssion";
import { fontScale } from "../../utils/Fonts";

export const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        flexDirection:"row",
        paddingVertical:fontScale(5),
        marginTop:statusbarHeight,
        marginBottom: 10
    },
    uInfoContainer:{
        marginLeft:fontScale(10)
    },
    backIcon:{
        width:fontScale(50),
        left:-fontScale(30)
    },
    title:{
        textAlign:"center",
        fontSize:fontScale(19),
        fontWeight:"bold",
        marginLeft:-fontScale(50),
        color:"#F1E90F",
        width:width-fontScale(100),
        height:fontScale(50),
        paddingVertical:fontScale(13),
       
    },
    uInfo:{
        marginLeft:fontScale(10),
        textAlignVertical:"center",
        color:'#FCEEEE',
        fontWeight:"bold",
        marginTop:fontScale(5)
    },
    uStaff:{
        marginLeft:fontScale(10),
        textAlignVertical:"center",
        color:'#AFBFC1',
        fontWeight:"bold",
        marginTop:fontScale(2)
    }
})