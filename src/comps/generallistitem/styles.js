import { StyleSheet } from "react-native";
import { fontScale } from "../../utils/Fonts";

export const styles = StyleSheet.create({
    container:{
        marginHorizontal:fontScale(10),
        backgroundColor: "#fff", shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, borderRadius: fontScale(17),
        paddingVertical:fontScale(15)
    }
})