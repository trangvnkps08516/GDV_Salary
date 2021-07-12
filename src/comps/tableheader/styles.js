import { StyleSheet } from "react-native";
import { height } from "../../utils/Dimenssion";
import { fontScale } from "../../utils/Fonts";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginRight: height * 0.0246305418719212,
        flex: 1
    },
    icon: {
        width: height * 0.0184729064039409,
        height: height * 0.0184729064039409,
        marginTop: 0
    },
    title: {
        color: '#20B8B8',
        fontSize: fontScale(16),
        fontWeight: 'bold',
        marginLeft: height * 0.0049261083743842,
        marginHorizontal: height * 0.0061576354679803
    }
});
