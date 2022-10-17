import { createStackNavigator } from "@react-navigation/stack";
import { WelcomeScreen } from "../screens/auth/WelcomeScreen";
import { LoginScreen } from "../screens/auth/Login";
import { RegisterScreen } from "../screens/auth/Register";
import { OtpScreen } from "../screens/auth/Otp";
import { I18nManager } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import i18n from "../language/i18n";
import React, { useEffect } from "react";
import * as Localization from "expo-localization";
import * as Updates from "expo-updates";

const Stack = createStackNavigator();

export async function getLanguage() {
  try {
    const code = await AsyncStorage.getItem("languageCode");
    if (code == null) {
      return "en";
    } else {
      if (code === "ar") {
        await I18nManager.forceRTL(Localization.isRTL);
        await I18nManager.allowRTL(Localization.isRTL);
      } else {
        await I18nManager.forceRTL(Localization.isRTL);
        await I18nManager.allowRTL(Localization.isRTL);
      }
      i18n.changeLanguage(code);
      return code;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function setLanguage(value) {
  const oldLang = await AsyncStorage.getItem("languageCode");
  try {
    const result = await AsyncStorage.setItem("languageCode", value);
    i18n.changeLanguage(value);
    if (value === "ar") {
      await I18nManager.forceRTL(true);
      await I18nManager.allowRTL(true);
      Updates.reloadAsync();
    } else if (oldLang === "ar") {
      await I18nManager.forceRTL(false);
      await I18nManager.allowRTL(false);
      Updates.reloadAsync();
    }
    return result;
  } catch (err) {
    console.log(err);
  }
}
export const AccountNavigator = () => {
  useEffect(() => {
    getLanguage();
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
      ></Stack.Screen>
      <Stack.Screen name="LoginScreen" component={LoginScreen}></Stack.Screen>
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
      ></Stack.Screen>
      <Stack.Screen name="OtpScreen" component={OtpScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};
