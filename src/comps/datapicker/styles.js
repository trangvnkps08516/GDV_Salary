import { StyleSheet } from "react-native";
import { colors } from "../../utils/Colors";
import { fontScale } from "../../utils/Fonts";

export const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignSelf: "center"
    },
    picker: {
        flexDirection: "row",
        backgroundColor: colors.white,
        paddingVertical: fontScale(8),
        borderRadius: fontScale(12),

    },
    dateLabel: {
        flex: 1,
        fontSize: fontScale(14),
        textAlignVertical:"center",
        color: "#848484",
        paddingLeft:fontScale(145)
    },
    selectContent: {
        borderBottomColor: "#f1f1f1",
        borderBottomWidth: 1
    },
    selectItem: {
        textAlign: "center",
        paddingVertical: fontScale(15),
        fontSize: fontScale(13),
        borderBottomColor: "#f1f1f1",
        borderBottomWidth: 1
    },
    dialogTitle: {
        textAlign: "center",
        paddingBottom: fontScale(13),
        fontSize: fontScale(13),
        fontWeight: "bold",
    },
    arrDown: {
        position: "absolute",
        width: fontScale(20),
        height: fontScale(20),
        right: 0,
        marginTop: fontScale(11),
        marginRight: fontScale(15)

    },

    leftIco: {
        width: fontScale(25),
        left:fontScale(10),
        height: fontScale(23),
    },
})