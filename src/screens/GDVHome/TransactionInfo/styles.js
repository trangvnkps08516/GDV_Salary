import { StyleSheet } from "react-native";
import { colors } from "../../../utils/Colors";
import { fontScale } from "../../../utils/Fonts";

export const styles = StyleSheet.create({
    container:{ flex: 1,backgroundColor:colors.primary },
    bodyScr:{ marginTop: fontScale(27) },
    body:{
        flex:1,
        backgroundColor:colors.white
    },
    detailInfo:{
        paddingVertical:fontScale(20),
        marginHorizontal:fontScale(17),
        shadowColor: "#000",
        backgroundColor:colors.white,  
        marginTop:fontScale(18),
        borderRadius:fontScale(17),
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,    
        elevation: 5
    },
    foneCardNoMoney: {
        marginLeft: 50
    }

})