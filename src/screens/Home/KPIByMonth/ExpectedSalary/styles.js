import { StyleSheet } from "react-native";
import { colors } from "../../../../utils/Colors";
import { fontScale } from "../../../../utils/Fonts";

export const styles = StyleSheet.create({
    container:{ flex: 1,backgroundColor:colors.primary },
    bodyScr:{ marginTop: fontScale(27) },
    sumKpiContainer:{ flexDirection: "row",justifyContent:"center" },
    sumKpiTitle:{ color: colors.black,fontSize:fontScale(18),fontWeight:"bold", marginTop: -fontScale(16) },
    sumKpiMonth:{ color: colors.black,fontSize:fontScale(18),fontWeight:"bold", marginTop: -fontScale(16) },
    sumKpi:{ color: colors.lightBlue,fontSize:fontScale(21),textAlign: "center",fontWeight:"bold", marginTop: fontScale(9) },
   
    detailInfo:{
        // minHeight: 50,
        paddingVertical:fontScale(7),
        marginHorizontal:fontScale(17),
        shadowColor: "#000",
        
        backgroundColor:colors.white,  
        marginTop:fontScale(20),
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