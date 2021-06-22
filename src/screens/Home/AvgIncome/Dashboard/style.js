import { StyleSheet } from "react-native";
import { colors } from "../../../../utils/Colors";
import { width } from "../../../../utils/Dimenssion";
import { fontScale } from "../../../../utils/Fonts";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },
  body: {
    backgroundColor: colors.white,
  },
  menu: {
    backgroundColor: colors.white,
    width: width - fontScale(30),
    marginHorizontal: fontScale(15),
    // height: fontScale(200),
    borderRadius: fontScale(15),
    paddingTop: -fontScale(9),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  icon: {
    position: "absolute",
    right: fontScale(25),
    top: -fontScale(30),
    resizeMode: "contain",
    width: fontScale(60),
    height: fontScale(60),
  },

  avg: {
    color: "#2E2E31",
    fontWeight: "bold",
    fontSize: fontScale(18),
    right: -fontScale(30),
    flex: 2
  },
  money: {
    color: "#00BECC",
    fontWeight: "bold",
    fontSize: fontScale(18),
    flex: 1,
    right: -fontScale(15)
    },
    text: {
        color: "#F8F8F8",
        alignSelf: "center",
        fontSize: fontScale(15)
    }
});
