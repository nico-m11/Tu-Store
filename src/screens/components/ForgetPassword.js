import React from "react";
import { Text, View, Input } from "react-native";
import { Colors } from "../../themes/colors";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";
import { useTranslation } from "react-i18next";
import MainButton from "./MainButton";

const ForgetPassword = (props) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <View
        style={{
          marginTop: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ ...Fonts.Black24Bold }}>{t("forget_password2")}</Text>
        <Text
          style={{
            ...Fonts.Black14Medium,
            textAlign: "center",
            marginHorizontal: 15,
            marginTop: 20,
          }}
        >
          {t("email_verify_text")}
        </Text>
        <View style={{ marginTop: 25 }}>
          <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
            {t("enter_email")}
          </Text>
          <Input
            placeholder={t("email_placeholder")}
            containerStyle={{
              marginTop: 8,
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
            inputContainerStyle={{
              borderBottomWidth: 0,
              ...ConstantStyle.shadow,
              backgroundColor: Colors.white,
              borderRadius: 10,
              paddingHorizontal: 15,
              width: "97%",
              height: 45,
            }}
            inputStyle={{ ...Fonts.Black14Medium }}
            secureTextEntry={false}
          />
        </View>
      </View>
      <View style={{ width: "92%", marginVertical: 20 }}>
        <MainButton name={t("continue")} />
      </View>
    </>
  );
};
export default ForgetPassword;
