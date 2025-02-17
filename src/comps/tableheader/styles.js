import { StyleSheet } from "react-native";
import { fontScale } from "../../utils/Fonts";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginRight: fontScale(2)
    },
    icon: {
        width: fontScale(15),
        height: fontScale(15),
        marginTop: 0
    },
    title: {
        color: '#20B8B8',
        fontSize: fontScale(14),
        fontWeight: 'bold',
        marginLeft:fontScale(4),
        marginHorizontal: fontScale(5)
    }
});
