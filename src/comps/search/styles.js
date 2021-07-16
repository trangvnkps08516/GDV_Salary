import { StyleSheet } from "react-native";
import { fontScale } from "../../utils/Fonts";

export const styles = StyleSheet.create({

    leftIco: {
        width: fontScale(38),
        left:fontScale(10),
        height: fontScale(38),
    },
    homeSearch: {
        height: fontScale(40),
        borderRadius: fontScale(12),
        flexDirection: 'row',
        alignItems: "center",
        color: "#B7B7B7",
        fontSize: fontScale(14),
        textAlign:"center"
    },
    rightIco: {
        width: fontScale(25),
        height: fontScale(25),
        right:fontScale(-5)
    }
})