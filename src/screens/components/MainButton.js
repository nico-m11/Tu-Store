import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";

const MainButton = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{ ...ConstantStyle.btnShadow, borderRadius: 10 }}
      onPress={props.onPress}
    >
      <LinearGradient
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: 45,
          borderRadius: 10,
        }}
        colors={["#0076DE", "#00D6D6"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={{ ...Fonts.White18Bold }}>{props.name}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
export default MainButton;
