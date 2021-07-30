import { StyleSheet } from "react-native";
import { colors } from "../../utils/Colors";
import { fontScale } from "../../utils/Fonts";

export const styles = StyleSheet.create({
    leftIco: {
        width: fontScale(38),
        left:fontScale(10),
        height: fontScale(38),
    },
    homeSearch: {
        borderRadius: fontScale(12),
        alignItems: "center",
        color: "#B7B7B7",
        fontSize: fontScale(13),
        textAlign:"center",
       
    },
    rightIco: {
        width: fontScale(25),
        height: fontScale(25),
        right:fontScale(-5)
    },
    message:{ textAlign: "center", color: colors.primary, marginVertical: fontScale(5) }
})