import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";
import CustomHeader from "../components/CustomHeader";
import { useTranslation } from "react-i18next";

export const NewsDetails = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  const { height, width } = Dimensions.get("window");
  return (
    <SafeAreaView style={{ ...ConstantStyle.container }}>
      <CustomHeader navigation={navigation} />
      <View
        style={{
          backgroundColor: "white",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          flex: 1,
        }}
      >
        <View style={{ marginTop: 15 }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: "center",
              marginHorizontal: 15,
            }}
          >
            <Text
              style={{
                ...Fonts.Black22Bold,
                textAlign: "center",
                marginVertical: 3,
              }}
            >
              {t("guide_to_crypto")}
            </Text>
            <Image
              source={require("../../../assets/images/news_details.png")}
              style={{ marginVertical: 15, width: width }}
            />
            <Text
              style={{
                ...Fonts.Black14Medium,
                marginBottom: 15,
                textAlign: "left",
              }}
            >
              {t("lorem_4")}
            </Text>
            <Text
              style={{
                ...Fonts.Black14Medium,
                marginBottom: 15,
                textAlign: "left",
              }}
            >
              {t("lorem_5")}
            </Text>
            <Text
              style={{
                ...Fonts.Black14Medium,
                marginBottom: 15,
                textAlign: "left",
              }}
            >
              {t("lorem_6")}{" "}
            </Text>
            <Text
              style={{
                ...Fonts.Black14Medium,
                marginBottom: 15,
                textAlign: "left",
              }}
            >
              {t("lorem_4")}
            </Text>
            <Text
              style={{
                ...Fonts.Black14Medium,
                marginBottom: 15,
                textAlign: "left",
              }}
            >
              {t("lorem_6")}{" "}
            </Text>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
