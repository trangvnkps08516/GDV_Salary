import { StyleSheet } from "react-native";
import { height } from "../../utils/Dimenssion";
import { fontScale } from "../../utils/Fonts";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: fontScale(15)
    },
    textContent: {
        marginTop: -fontScale(5),
        marginLeft: fontScale(5),
        fontWeight: 'bold',
        color: '#1C5858',
        fontSize: fontScale(17)
    },
    title: {
        color: "#9FAEAE",
        padding: fontScale(5),
        fontSize: fontScale(18),
    },
    inputContent: {
        borderBottomWidth: 1,
        borderBottomColor: '#d6d6d6',
        color: '#068782',
        fontSize: fontScale(17),
        marginLeft: fontScale(5),
        paddingTop: fontScale(10),
        marginTop: -fontScale(10),
        height: fontScale(35)
    },
    icon: {
        width: fontScale(32),
        height: fontScale(32),
        marginVertical: fontScale(5)
    }
})