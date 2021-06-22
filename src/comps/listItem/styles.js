import { StyleSheet } from "react-native";
import { colors } from "../../utils/Colors";
import { width } from "../../utils/Dimenssion";
import { fontScale } from "../../utils/Fonts";

export const styles = StyleSheet.create({
    container: { flexDirection: "row", marginHorizontal: fontScale(15), marginVertical: fontScale(13) },
    titleContain: { flexDirection: "row", flex: 1 },
    mainTitle:{ fontWeight: "bold",fontSize:fontScale(17),paddingVertical:fontScale(5), marginLeft: fontScale(5), color: '#2E2E31', textAlignVertical: "center",width:width/2 },
    title: { fontWeight: "bold",fontSize:fontScale(14),paddingVertical:fontScale(5), marginLeft: fontScale(5), color: colors.grey, textAlignVertical: "center",width:width/2 },
    price: { textAlign: "right",fontSize:fontScale(14),paddingVertical:fontScale(2),color:colors.black },
    icon: { width: fontScale(25), height: fontScale(25),marginRight:fontScale(5),marginTop:fontScale(5) }
})