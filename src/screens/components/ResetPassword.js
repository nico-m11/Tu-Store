import React, { useState } from "react";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  I18nManager,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Fonts } from "../../themes/fonts";
import { Colors } from "../../themes/colors";
import { Input } from "react-native-elements";
import ConstantStyle from "../../themes/styles";
import { useTranslation } from "react-i18next";
import MainButton from "./MainButton";
const ResetPassword = (props) => {
  const { t, i18n } = useTranslation();
  const { height, width } = Dimensions.get("window");
  // show and hide multiple input box
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  const handleClick = (fieldName) => {
    setValues({
      ...values,
      showPassword: fieldName === values.showPassword ? "" : fieldName,
    });
  };
  return (
    <>
      <View
        style={{
          marginTop: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ ...Fonts.Black24Bold }}>{t("reset_password")}</Text>
        <Text
          style={{
            ...Fonts.Black14Medium,
            textAlign: "center",
            marginHorizontal: 15,
            marginTop: 20,
          }}
        >
          {t("set_password")}
        </Text>
        <View style={{ marginTop: 25 }}>
          <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
            {t("password_label")}
          </Text>
          <Input
            placeholder={t("password_label")}
            containerStyle={{
              marginTop: 8,
              marginBottom: -10,
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
              width: width - 40,
              height: 45,
            }}
            inputStyle={{ ...Fonts.Black14Medium }}
            rightIcon={
              <Ionicons
                name={values.showPassword === "Password" ? "eye" : "eye-off"}
                style={{ marginLeft: 15 }}
                color={Colors.grey}
                size={20}
                onPress={() => handleClick("Password")}
              />
            }
            secureTextEntry={values.showPassword === "Password" ? false : true}
          />
          <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
            {t("confirm_password")}
          </Text>
          <Input
            placeholder={t("confirm_password")}
            containerStyle={{
              marginTop: 8,
              marginBottom: -10,
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
              width: width - 40,
              height: 45,
            }}
            inputStyle={{ ...Fonts.Black14Medium }}
            rightIcon={
              <Ionicons
                name={
                  values.showPassword === "currentPassword" ? "eye" : "eye-off"
                }
                style={{ marginLeft: 15 }}
                color={Colors.grey}
                size={20}
                onPress={() => handleClick("currentPassword")}
              />
            }
            secureTextEntry={
              values.showPassword === "currentPassword" ? false : true
            }
          />
        </View>
      </View>
      <View style={{ margin: 20 }}>
        <MainButton name={t("reset_password")} onPress={props.onPress} />
      </View>
    </>
  );
};
export default ResetPassword;
