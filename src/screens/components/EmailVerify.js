import React from "react";
import { Text, View, Dimensions } from "react-native";
import { Fonts } from "../../themes/fonts";
import { Colors } from "../../themes/colors";
import ConstantStyle from "../../themes/styles";
import { useTranslation } from "react-i18next";
import MainButton from "./MainButton";
import OTPTextView from "react-native-otp-textinput";
const EmailVerify = (props) => {
  const { t, i18n } = useTranslation();
  const { height, width } = Dimensions.get("window");
  return (
    <>
      <View
        style={{
          marginTop: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ ...Fonts.Black24Bold }}>{t("4_digit_code")}</Text>
        <Text
          style={{
            ...Fonts.Black14Medium,
            textAlign: "center",
            marginHorizontal: 25,
            marginTop: 20,
          }}
        >
          {t("email_verification")}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <OTPTextView
            containerStyle={{ marginVertical: 15 }}
            textInputStyle={{
              width: 50,
              height: 50,
              backgroundColor: Colors.white,
              ...ConstantStyle.shadow,
              borderRadius: 10,
              marginHorizontal: 10,
              fontFamily: "Mulish-Medium",
              fontSize: 20,
            }}
            tintColor={Colors.transparent}
            offTintColor={Colors.transparent}
            inputCount={4}
            keyboardType="numeric"
          />
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          margin: 20,
          // marginHorizontal: 15,
        }}
      >
        <MainButton name={t("continue")} onPress={props.onPress} />
      </View>
    </>
  );
};
export default EmailVerify;
