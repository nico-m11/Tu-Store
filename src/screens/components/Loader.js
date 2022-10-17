import React from "react";
import { Modal, Text, View, ActivityIndicator } from "react-native";
import { Colors } from "../../themes/colors";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";
import { useTranslation } from "react-i18next";

const Loader = (props) => {
  const { t, i18n } = useTranslation();
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
            width: 300,
            height: 100,
            backgroundColor: "white",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            ...ConstantStyle.shadow,
          }}
        >
          <ActivityIndicator size="large" color={Colors.primary} />
          <Text style={{ ...Fonts.Black18Bold }}>{t("please_wait")}</Text>
        </View>
      </View>
    </Modal>
  );
};
export default Loader;
