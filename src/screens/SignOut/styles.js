import { StyleSheet } from "react-native";
import { colors } from "../../utils/Colors";
import { height } from "../../utils/Dimenssion";
import { fontScale } from "../../utils/Fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    dialog: {
        backgroundColor: colors.white,
        borderTopLeftRadius: fontScale(40),
        borderTopRightRadius: fontScale(40),
        height: height / 4,
        marginTop: height * 3 / 4
    },
    logoutMessage: {
        textAlign: "center",
        padding: fontScale(10),
        marginTop: fontScale(30),
        fontSize: fontScale(17),
        fontWeight: "bold"
    },
    text: {
        color: colors.white,
        fontSize: fontScale(18),
        fontWeight: 'bold',
        textAlign: "center"

    },
    button: {
        width: fontScale(120),
        borderRadius: fontScale(10),
        alignContent: 'center',
        justifyContent: 'center',
        paddingHorizontal: fontScale(5),
        paddingVertical: fontScale(8)

    },
    icon: {
        width: fontScale(20),
        height: fontScale(20),
        tintColor: colors.white,
        marginRight: fontScale(7),
        marginTop: fontScale(3)
    },
    buttonContainer: {
        marginTop: fontScale(20),
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "space-between"
    }

})