import { StyleSheet } from "react-native";
import { colors } from "../../../../utils/Colors";
import { fontScale } from "../../../../utils/Fonts";

export const styles = StyleSheet.create({
    container:{ flex: 1,backgroundColor:colors.primary },
    bodyScr:{ marginTop: fontScale(27) },
    sumKpiContainer:{ flexDirection: "row",justifyContent:"center" },
    sumKpiTitle:{ color: colors.black,fontSize:fontScale(20),fontWeight:"bold" },
    sumKpi:{ color: colors.lightBlue,fontSize:fontScale(20),marginLeft:fontScale(2),fontWeight:"bold" },
    kpisContainer: { flexDirection: "row",justifyContent:"center", marginTop: 10 },
    kpisTitle:{ color: colors.black,fontSize:fontScale(20),fontWeight:"bold" },
    kpisKpi:{ color: colors.lightBlue,fontSize:fontScale(20),marginLeft:fontScale(2),fontWeight:"bold" },
    detailInfo:{
        paddingVertical:fontScale(17),
        marginHorizontal:fontScale(17),
        shadowColor: "#000",
        backgroundColor:colors.white,  
        marginTop:fontScale(40),
        borderRadius:fontScale(17),
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,    
        elevation: 5
    }
})