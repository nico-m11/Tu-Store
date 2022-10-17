import { StyleSheet } from "react-native";
import { Colors } from "./colors";

const ConstantStyle = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 4,
  },
  btnShadow: {
    shadowColor: "#0076DE",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: Colors.white,
  },
  radius: {
    borderRadius: 10,
  },
});
export default ConstantStyle;
