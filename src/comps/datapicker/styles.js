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
        textAlign: "center",
    },
    selectContent: {
        borderBottomColor: "#f1f1f1",
        borderBottomWidth: 1
    },
    selectItem: {
        textAlign: "center",
        paddingVertical: fontScale(15),
        borderBottomColor: "#f1f1f1",
        borderBottomWidth: 1
    },
    dialogTitle: {
        textAlign: "center",
        paddingBottom: fontScale(13),
        fontWeight: "bold",
    },
    arrDown: {
        position: "absolute",
        width: fontScale(25),
        height: fontScale(25),
        right: 0,
        marginTop: fontScale(5),
        marginRight: fontScale(10)

    }
})