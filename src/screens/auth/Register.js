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
  TextInput,
  Button,
  Alert,
  FlatList,
  BackHandler,
} from "react-native";

import { Ionicons, Feather } from "@expo/vector-icons";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";
import { Colors } from "../../themes/colors";
import { Input } from "react-native-elements";
import MainButton from "../components/MainButton";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import * as yup from "yup";

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
        <Formik
          initialValues={{
            name: "",
            surname: "",
            email: "",
            password: "",
          }}
          onSubmit={(values) => Alert.alert(JSON.stringify(values))}
          validationSchema={yup.object().shape({
            name: yup.string().required("Please, provide your name!"),
            mobile: yup
              .number()
              .required("Please, provide your mobile number!"),
            email: yup.string().email().required(),
            password: yup
              .string()
              .min(4)
              .max(10, "Password should not excced 10 chars.")
              .required(),
          })}
        >
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            touched,
            isValid,
            handleSubmit,
          }) => (
            <View
              style={{
                paddingTop: 20,
              }}
            >
              <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
                {t("name_label")}
              </Text>
              <Input
                placeholder={t("name")}
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
                value={values.name}
                onChangeText={handleChange("name")}
                onBlur={() => setFieldTouched("name")}
              />
              {touched.name && errors.name && (
                <Text
                  style={{
                    fontSize: 12,
                    color: "#FF0D10",
                    marginLeft: "5%",
                    marginBottom: 15,
                  }}
                >
                  {errors.name}
                </Text>
              )}
              <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
                {t("email")}
              </Text>
              <Input
                placeholder={t("email")}
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
                value={values.email}
                style={{ marginBottom: 20 }}
                onChangeText={handleChange("email")}
                onBlur={() => setFieldTouched("email")}
              />
              {touched.email && errors.email && (
                <Text
                  style={{
                    fontSize: 12,
                    color: "#FF0D10",
                    marginLeft: "5%",
                    marginBottom: 15,
                  }}
                >
                  {errors.email}
                </Text>
              )}
              <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
                {t("mobile")}
              </Text>
              <Input
                placeholder={t("mobile")}
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
                value={values.mobile}
                style={{ marginBottom: 20 }}
                onChangeText={handleChange("mobile")}
                onBlur={() => setFieldTouched("mobile")}
              />
              {touched.mobile && errors.mobile && (
                <Text
                  style={{
                    fontSize: 12,
                    color: "#FF0D10",
                    marginLeft: "5%",
                    marginBottom: 15,
                  }}
                >
                  {errors.mobile}
                </Text>
              )}
              <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
                {t("password")}
              </Text>
              <Input
                placeholder={t("password")}
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
                    name={values.password === "Password" ? "eye" : "eye-off"}
                    style={{ marginLeft: 15 }}
                    color={Colors.grey}
                    size={20}
                  />
                }
                secureTextEntry={values.password === "Password" ? false : true}
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={() => setFieldTouched("password")}
              />
              {touched.password && errors.password && (
                <Text
                  style={{
                    fontSize: 12,
                    color: "#FF0D10",
                    marginLeft: "5%",
                    marginBottom: 15,
                  }}
                >
                  {errors.password}
                </Text>
              )}
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
                      values.showPassword === "currentPassword"
                        ? "eye"
                        : "eye-off"
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
                <Button
                  color="#3740FE"
                  title="Submit"
                  disabled={!isValid}
                  //onPress={() => navigation.navigate("OtpScreen")}
                  onPress={() => handleSubmit()}
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
          )}
        </Formik>
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
