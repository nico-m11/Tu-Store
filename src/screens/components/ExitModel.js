import React from "react";
import { Modal, Text, View, TouchableOpacity, Dimensions } from "react-native";
import { Colors } from "../../themes/colors";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";
import { useTranslation } from "react-i18next";
import MainButton from "./MainButton";
const ExitModel = (props) => {
  const { t, i18n } = useTranslation();
  const { height, width } = Dimensions.get("window");
  return (
    <Modal animationType="fade" transparent={true} visible={props.visible}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#00000080",
        }}
      >
        <View
          style={{
            width: width - 60,
            backgroundColor: Colors.white,
            borderRadius: 10,
            ...ConstantStyle.shadow,
          }}
        >
          <Text
            style={{ ...Fonts.Black16Bold, marginTop: 20, textAlign: "center" }}
          >
            {props.title}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginVertical: 20,
            }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={props.onCancel}
              style={{
                ...ConstantStyle.shadow,
                width: 125,
                height: 45,
                backgroundColor: Colors.white,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ ...Fonts.Grey18Medium }}>{props.cancel}</Text>
            </TouchableOpacity>
            <View
              style={{
                ...ConstantStyle.btnShadow,
                width: 125,
                borderRadius: 10,
              }}
            >
              <MainButton name={props.btnName} onPress={props.btnOnPress} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default ExitModel;
