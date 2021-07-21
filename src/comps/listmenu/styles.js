import { StyleSheet } from "react-native";
import { colors } from "../../utils/Colors";
import { width } from "../../utils/Dimenssion";
import { fontScale } from "../../utils/Fonts";

export const styles = StyleSheet.create({
  container: {
    width: width-50,
    alignSelf:"center",
    paddingTop: 20,
  },

  text: {
    color: "#000000",
    alignSelf: "center",
    marginTop: -fontScale(25),
    fontWeight: "bold", 
    fontSize: fontScale(18)
  },
  bg: {
    backgroundColor: colors.white,
    borderRadius: fontScale(15),
    paddingTop: -fontScale(9),
    minHeight: fontScale(150),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  dateView: {
    marginTop: -8

  },

  list: {
    marginTop: fontScale(15)
  },

  icon: {
    position: "absolute",
    right: fontScale(50),
    top: fontScale(3),
    resizeMode: "contain",
    width: fontScale(42),
    height: fontScale(42),
  },
  title: {
    minHeight: fontScale(54),
    fontSize: fontScale(19),
    marginLeft: fontScale(15),
    fontWeight: "bold",
    paddingTop: fontScale(26),
    lineHeight: fontScale(23),
  },
  value: {
    textAlign: "right",
    right: fontScale(30),
    fontSize: fontScale(18),
    fontWeight: "bold",
    color: "#00BECC",
    top: -fontScale(12),
  },
  
  labelDataOne: {
    color: "#151515",
    marginLeft: fontScale(8)
  },

  labelDataTwo: {
    color: "#151515"
  },

  labelDataThree: {
    color: "#151515",
    marginLeft: fontScale(8)
  },

  labelDataFour: {
    color: "#151515"
    
    
  },


  fieldData: {
    color: "#151515",
    marginTop: fontScale(8),
    marginLeft: 15,
    fontWeight: "bold",
    fontSize: fontScale(16),
    width: "75%"
  },
  fieldDataOne: {
    color: "#00BECC",
    marginLeft: fontScale(25),
    fontWeight: "bold"
  },

  fieldDataTwo: {
    color: "#00BECC",
    marginLeft: fontScale(25),
    fontWeight: "bold"
  },
  fieldDataThree: {
    color: "#00BECC",
    marginLeft: fontScale(25),
    fontWeight: "bold"
  },
  fieldDataFour: {
    color: "#00BECC",
    marginLeft: fontScale(25),
    fontWeight: "bold"
    
  },

  bodyScr: {
    marginTop: fontScale(18)
  }

  
});
