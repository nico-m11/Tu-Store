import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  StyleSheet,
  I18nManager,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";
import { Colors } from "../../themes/colors";
import MainButton from "../components/MainButton";
import { useDispatch } from "react-redux";
import * as authAction from "../../store/action/auth";
import Loader from "../components/Loader";
import { useTranslation } from "react-i18next";
import OTPTextView from "react-native-otp-textinput";

export const OtpScreen = ({ navigation }) => {
  const { height, width } = Dimensions.get("window");
  const { t, i18n } = useTranslation();
  // dispatch  action
  const dispatch = useDispatch();

  //loader
  const [loader, setLoader] = useState(false);
  const loaderShow = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      dispatch(authAction.signUp("email", "password"));
    }, 2500);
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
              {t("otp_verify")}
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
      <View
        style={{
          width: width,
          height: height,
          backgroundColor: "white",
          flex: 1,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <View style={{ marginTop: 35 }}>
          <Text style={{ ...Fonts.Black24Bold, textAlign: "center" }}>
            {t("4_digit_code")}
          </Text>
          <Text
            style={{
              ...Fonts.Black14Medium,
              textAlign: "center",
              marginHorizontal: 50,
              marginTop: 10,
            }}
          >
            {t("please_enter_code")}
          </Text>
        </View>
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
        <View style={{ marginHorizontal: 15, marginVertical: 20 }}>
          <MainButton name={t("continue")} onPress={() => loaderShow()} />
        </View>
      </View>
      <Loader visible={loader} />
    </SafeAreaView>
  );
};
