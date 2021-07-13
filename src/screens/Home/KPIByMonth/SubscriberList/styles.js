import { StyleSheet } from "react-native";
import { colors } from "../../../../utils/Colors";
import { width } from "../../../../utils/Dimenssion";
import { fontScale } from "../../../../utils/Fonts";

export const styles = StyleSheet.create({
    container:{ flex: 1,backgroundColor:colors.primary },
    bodyScr:{ marginTop: fontScale(27) },

    body:{
        flex:1,
        backgroundColor:colors.white
    },

    status:{
         textAlign: "center" ,
         alignSelf:"center",
         marginTop: -fontScale(5)
    },

    search:{
        marginTop: fontScale(20)
    },
    dateCol:{ textAlign: "center",fontSize: fontScale(14) }
})