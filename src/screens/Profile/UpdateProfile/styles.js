import { Platform, StyleSheet } from "react-native";
import { colors } from "../../../utils/Colors";
import { height, statusbarHeight, width } from "../../../utils/Dimenssion";
import { fontScale } from "../../../utils/Fonts";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  button: {
    backgroundColor: "#2196F3",
    width: fontScale(250),
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 30
  },
  headerShape: {
    width: width,
    height: fontScale(290),
    marginTop: -statusbarHeight - 50,
    zIndex: -10,
    position: "relative",
    tintColor: colors.primary,
  },
  personInfo: {
    width: width / 2,
    position: "absolute",
    marginTop: fontScale(125),
  },
  avatar: {
    width: fontScale(110),
    height: fontScale(110),
    borderRadius: fontScale(104)
  },
  avatarImg: {
    position: "absolute",
    marginTop: fontScale(60), 
    width: fontScale(110), 
    height: fontScale(110), 
    borderRadius: fontScale(110) / 2, 
    marginLeft: width - fontScale(154)
  },
  closeIcon: { marginLeft: "87%", marginTop: fontScale(5), marginBottom: -fontScale(10) },
  changePasswordOption: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#EFEFEF",
    marginTop: -fontScale(20),
  },
  optionContainer: {
    position: "absolute",
    width: width - fontScale(100),
    backgroundColor: colors.white,
    marginTop: height / 3,
    marginHorizontal: fontScale(50),
    borderRadius: fontScale(20),
    borderColor: "#F5F5F5",
    shadowColor: "#CCC",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 16,
    elevation: 9,
  },
  staffCode: {
    fontSize: fontScale(19),
    width: width / 2,
    textAlign: "center",
    color: "#D0D6D6",
  },
  staffName: {
    fontSize: fontScale(20),
    color: colors.white,
    width: width / 2,
    textAlign: "center",
  },
  closeButton: { marginLeft: "87%", marginTop: fontScale(5), marginBottom: -fontScale(10) },
  option: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#EFEFEF",
    marginTop: -fontScale(20),
  },
  optionWrapper: {
    backgroundColor: colors.primary,
    position: "absolute",
    width: width,
    height: height,
  },
  optionText: { color: colors.primary, fontSize: fontScale(16) },
  avatarContainer:{
    position: "absolute",
    backgroundColor: "#333",
    marginTop: fontScale(34),
    width: fontScale(110),
    height: fontScale(110),
    borderRadius: fontScale(104),
    marginLeft: width - fontScale(154),
  }
});
