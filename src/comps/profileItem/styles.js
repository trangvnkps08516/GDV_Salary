import { StyleSheet } from "react-native";
import { colors } from "../../utils/Colors";
import { height } from "../../utils/Dimenssion";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: height * 0.018472906
    },
    textContent: {
        marginTop: -height * 0.006157635,
        marginLeft: height * 0.006157635,
        fontWeight: 'bold',
        color: '#1C5858',
        fontSize: height * 0.020935961
    },
    title: {
        color: "#9FAEAE",
        padding: height * 0.006157635,
        fontSize: height * 0.0197044334975369,
        fontWeight: 'bold'
    },
    inputContent: {
        borderBottomWidth: 1,
        borderBottomColor: '#d6d6d6',
        color: '#068782',
        fontSize: height * 0.020935961,
        marginLeft: height * 0.006157635,
        paddingTop: height * 0.012315271,
        marginTop: -height * 0.012315271,
        height: height * 0.043103448
    },
    icon: {
        width: height * 0.039408867,
        height: height * 0.039408867,
        marginVertical: height * 0.006157635
    }
})