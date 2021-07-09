import { StyleSheet } from "react-native";
import { colors } from "../../../../utils/Colors";
import { fontScale } from "../../../../utils/Fonts";

export const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.primary },
    bodyScr: { marginTop: fontScale(27) },
    sumKpiContainer: { flexDirection: "row", justifyContent: "center",marginTop:fontScale(5) },
    sumKpiTitle: { color: colors.black, fontSize: fontScale(21), fontWeight: "bold", marginTop: fontScale(5) },
    sumKpi: { color: colors.lightBlue, fontSize: fontScale(21), marginLeft: fontScale(2), fontWeight: "bold", marginTop: fontScale(5) },

    detailInfo: {
        paddingVertical: fontScale(17),
        marginHorizontal: fontScale(17),
        marginBottom: fontScale(10),
        shadowColor: "#000",
        backgroundColor: colors.white,
        marginTop: fontScale(40),
        borderRadius: fontScale(17),
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
})