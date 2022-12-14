import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import WelcomeImg from "../../../assets/images/WelcomeImg";
import { Fonts } from "../../themes/fonts";
import { Colors } from "../../themes/colors";
import ConstantStyle from "../../themes/styles";
import MainButton from "../components/MainButton";
import { useTranslation } from "react-i18next";

export const WelcomeScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  const { height, width } = Dimensions.get("window");
  return (
    <SafeAreaView style={ConstantStyle.container}>
      <ImageBackground
        style={{ flex: 1, width: width, justifyContent: "space-between",marginTop:20 }}
        source={require("../../../assets/images/headerwhite.png")}
      >
        <ScrollView style={{ height: height }}>
          <View style={{ alignItems: "center" }}>
            <WelcomeImg />
            <Text style={{ ...Fonts.Black18Bold, textAlign:"center",marginTop:20 }}>{t("welcome_text")}</Text>
            <Text
              style={{
                ...Fonts.Black14Medium,
                marginHorizontal: 30,
                textAlign: "center",
                marginVertical: 12,
              }}
            >
              {t("welcome_lorem")}
            </Text>
          </View>
          <View style={{ marginHorizontal: 15 }}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate("LoginScreen")}
              style={{
                borderWidth: 1,
                borderColor: Colors.black,
                height: 45,
                borderRadius: 10,
                marginVertical: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ ...Fonts.Black18Bold }}>{t("sign_in")}</Text>
            </TouchableOpacity>
            <MainButton
              name={t("sign_up")}
              onPress={() => navigation.navigate("RegisterScreen")}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};
