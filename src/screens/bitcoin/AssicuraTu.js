import React, { useState } from "react";
import { SafeAreaView, Text, View, Image, Dimensions } from "react-native";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";
import { Colors } from "../../themes/colors";
import CustomHeader from "../components/CustomHeader";
import MainButton from "../components/MainButton";
import { useTranslation } from "react-i18next";

export const AssicuraTu = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  const { height, width } = Dimensions.get("window");
  return (
    <SafeAreaView style={{ ...ConstantStyle.container }}>
      <CustomHeader navigation={navigation} title={t("Assicura TU")} />
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: Colors.white,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingTop: 25,
          paddingHorizontal: 15,
        }}
      >
        <View
          style={{ flex: 2, alignItems: "center", justifyContent: "center" }}
        >
          <Image
            source={require("../../../assets/images/arton142.jpeg")}
            style={{ width: width - 30, borderRadius: 10 }}
          />
        </View>
        <View
          style={{ flex: 2, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ ...Fonts.Primary22Bold }}>{t("Assicura Tu")}</Text>
          <Text
            style={{
              ...Fonts.Grey16Medium,
              marginHorizontal: 30,
              textAlign: "center",
              marginVertical: 10,
            }}
          >
            {t("Assicura Tu")}
          </Text>
          
        </View>
        <View
          style={{ flex: 1, justifyContent: "flex-end", marginVertical: 20 }}
        >
          <MainButton name={t("Go")} />
        </View>
      </View>
    </SafeAreaView>
  );
};
