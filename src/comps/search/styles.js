import { StyleSheet } from "react-native";
import { fontScale } from "../../utils/Fonts";

export const styles = StyleSheet.create({

    leftIco: {
        width: fontScale(35),
        left:fontScale(10),
        height: fontScale(30),
    },
    homeSearch: {
        // backgroundColor: '#FFFFFF',
        height: fontScale(39),
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: "center",
        color: "#B7B7B7",
        fontSize: fontScale(14),
        textAlign:"center"
    },
    rightIco: {
        width: fontScale(20),
        height: fontScale(20),
        right:fontScale(-5)
    }
})