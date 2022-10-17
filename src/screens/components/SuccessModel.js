import React from "react";
import { Modal, Text, View, TouchableOpacity, Dimensions } from "react-native";
import { Colors } from "../../themes/colors";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

const SuccessModel = (props) => {
  const { t, i18n } = useTranslation();
  const { height, width } = Dimensions.get("window");
  return (
    <Modal animationType="fade" transparent={true} visible={props.modalVisible}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000000cd",
        }}
      >
        <View
          style={{
            width: width - 60,
            backgroundColor: Colors.white,
            borderRadius: 10,
            alignItems: "center",
            ...ConstantStyle.shadow,
          }}
        >
          {props.isBank ? (
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: Colors.green,
                borderRadius: 50,
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
                top: -25,
                marginBottom: -25,
                ...ConstantStyle.shadow,
              }}
            >
              <Ionicons name="checkmark-sharp" size={40} color={Colors.white} />
            </View>
          ) : null}
          {props.isBank ? null : (
            <View
              style={{
                width: 110,
                height: 110,
                backgroundColor: Colors.green,
                borderRadius: 100,
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
                top: -50,
                marginBottom: -50,
                ...ConstantStyle.shadow,
              }}
            >
              <Ionicons name="checkmark-sharp" size={60} color={Colors.white} />
            </View>
          )}
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginHorizontal: props.isBank ? 10 : 20,
            }}
          >
            {props.isBank ? (
              <Text
                style={{
                  ...Fonts.Black14Bold,
                  marginVertical: 15,
                  textAlign: "center",
                }}
              >
                {t("bank_add_text")}
              </Text>
            ) : null}
            {props.isSubmit ? (
              <Text style={{ ...Fonts.Black22Bold, marginVertical: 15 }}>
                {t("submitted")}
              </Text>
            ) : null}
            {props.isBank || props.isSubmit ? null : (
              <Text style={{ ...Fonts.Black22Bold, marginVertical: 15 }}>
                {t("awesome")}
              </Text>
            )}
            {props.isName ? (
              <Text style={{ ...Fonts.Grey16Medium, textAlign: "center" }}>
                {t("you_have")} {props.name} {t("btc_bitcoin")}
              </Text>
            ) : null}
            {props.isTitle ? (
              <Text style={{ ...Fonts.Grey16Medium, textAlign: "center" }}>
                {t("you_have")} {props.title} ${props.value}{" "}
              </Text>
            ) : null}
            {props.isFeedback ? (
              <Text style={{ ...Fonts.Grey16Medium, textAlign: "center" }}>
                {t("feedback_submit")}
              </Text>
            ) : null}
            {props.isSubmit ? (
              <Text style={{ ...Fonts.Grey16Medium, textAlign: "center" }}>
                {t("request_submit")}
              </Text>
            ) : null}
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={props.onPress}
            style={{
              height: props.isBank ? 35 : 50,
              width: width - 125,
              borderRadius: 10,
              backgroundColor: Colors.green,
              alignItems: "center",
              justifyContent: "center",
              marginVertical: props.isBank ? 15 : 30,
              ...ConstantStyle.btnShadow,
            }}
          >
            <Text style={{ ...Fonts.White18Bold }}>{t("ok")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default SuccessModel;
