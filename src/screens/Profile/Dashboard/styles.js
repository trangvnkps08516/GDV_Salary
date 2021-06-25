import { Platform, StyleSheet } from "react-native";
import { colors } from "../../../utils/Colors";
import { height, statusbarHeight, width } from "../../../utils/Dimenssion";
import { fontScale } from "../../../utils/Fonts";

export const styles = StyleSheet.create( {
    container:{
        backgroundColor:colors.white,
        flex:1
    },
    headerShape: {
        width: width,
        height: height * 0.3386699507389163,
        marginTop: -statusbarHeight - 50,
        zIndex: -10,
        position: 'relative',
        tintColor:colors.primary
    },
    personInfo: {
        width: width / 2,
        position: 'absolute',
        marginTop: fontScale(112)
    },
    avatar: { position: 'absolute', marginTop: fontScale(60), width: fontScale(110), height: fontScale(110), borderRadius: fontScale(110)/2, marginLeft: width - fontScale(154) },
    avatarImg: { position: 'absolute', width: height * 0.1279310344827586, height: height * 0.1279310344827586, borderRadius: height * 0.1279310344827586, marginLeft: width - (0.1896551724137931 * height) },
    closeIcon: { marginLeft: '87%', marginTop: 5, marginBottom: -10 },
    changePasswordOption: { borderBottomWidth: 0.5, borderBottomColor: '#EFEFEF', marginTop: -20 },
    optionContainer: {
        position: 'absolute', width: width - 100, backgroundColor: colors.white, marginTop: height / 3, marginHorizontal: 50, borderRadius: 20, borderColor: '#F5F5F5',
        shadowColor: "#CCC",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 16,
        elevation: 9
    },
    staffCode: {
        fontSize: height * 0.0233990147783251,
        width: width / 2,
        textAlign: 'center',
        color: '#D0D6D6'
    },
    staffName: {
        fontSize: height * 0.0221674876847291,
        color: colors.white,
        width: width / 2,
        textAlign: 'center'
    },
    closeButton: { marginLeft: '87%', marginTop: 5, marginBottom: -10 },
    option: { borderBottomWidth: 0.5, borderBottomColor: '#EFEFEF', marginTop: -20 },
    optionWrapper: {
        backgroundColor: colors.primary,
        position: 'absolute', width: width, height: height
    },
    optionText: { color: colors.primary, fontSize: height * 0.019704433 }
}
)