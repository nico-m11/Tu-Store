import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  I18nManager,
  Dimensions,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";
import { Colors } from "../../themes/colors";
import { Input } from "react-native-elements";
import MainButton from "../components/MainButton";
import { useTranslation } from "react-i18next";

export const RegisterScreen = ({ navigation }) => {
  const { height, width } = Dimensions.get("window");
  const { t, i18n } = useTranslation();
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
    <SafeAreaView style={{ ...ConstantStyle.container }}>
      <View>
        <ImageBackground
          style={{
            width: width,
            height: height / 5,
            justifyContent: "flex-end",
            alignItems: "flex-start",
          }}
          source={require("../../../assets/images/header.png")}
        >
          <Feather
            name={I18nManager.isRTL ? "chevron-right" : "chevron-left"}
            size={30}
            color={Colors.white}
            style={{ marginHorizontal: 15 }}
            onPress={() => navigation.goBack()}
          />
          <View style={{ marginVertical: 20 }}>
            <Text style={{ ...Fonts.White24Bold, marginHorizontal: 15 }}>
              {t("sign_up")}
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View>
        <ImageBackground
          style={{
            width: width,
            height: height / 5,
            ...StyleSheet.absoluteFillObject,
          }}
          source={require("../../../assets/images/header.png")}
        ></ImageBackground>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: "white",
          flex: 1,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <View
          style={{
            paddingTop: 20,
          }}
        >
          <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
            {t("name_label")}
          </Text>
          <Input
            placeholder={t("name_label")}
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
              width: width - 30,
              height: 45,
            }}
            inputStyle={{ ...Fonts.Black14Medium }}
            secureTextEntry={false}
          />
          <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
            {t("email_label")}
          </Text>
          <Input
            placeholder={t("email_placeholder")}
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
              width: width - 30,
              height: 45,
            }}
            inputStyle={{ ...Fonts.Black14Medium }}
            keyboardType="email-address"
            secureTextEntry={false}
          />
          <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
            {t("mobile_label")}
          </Text>
          <Input
            placeholder={t("mobile_placeholder")}
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
              width: width - 30,
              height: 45,
            }}
            inputStyle={{ ...Fonts.Black14Medium }}
            secureTextEntry={false}
            keyboardType="number-pad"
            maxLength={10}
          />
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
              width: width - 30,
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
              width: width - 30,
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

          <View style={{ marginHorizontal: 15, marginVertical: 20 }}>
            <MainButton
              name={t("sign_up")}
              onPress={() => navigation.navigate("OtpScreen")}
            />
          </View>
          <Text style={{ ...Fonts.Grey14Bold, textAlign: "center" }}>
            {t("or")}
          </Text>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginVertical: 15,
              flexDirection: "row",
            }}
          >
            {/* <TouchableOpacity
              activeOpacity={0.7}
              style={{ marginHorizontal: 10 }}
            >
              <Image
                style={{
                  width: 50,
                  height: 50,
                  resizeMode: "contain",
                  borderRadius: 25,
                }}
                alt="facebook"
                source={require("../../../assets/icons/facebook.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{ marginHorizontal: 10 }}
            >
              <Image
                style={{
                  width: 46,
                  height: 46,
                  resizeMode: "contain",
                  borderRadius: 25,
                }}
                alt="goggle"
                source={require("../../../assets/icons/google.png")}
              />
            </TouchableOpacity> */}
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            alignSelf: "center",
            marginVertical: 15,
          }}
        >
          <Text style={{ ...Fonts.Grey16Medium }}>{t("already_account")}</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Text style={{ ...Fonts.Primary16Medium }}> {t("sign_in")}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
