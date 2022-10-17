import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";
import { Colors } from "../../themes/colors";
import CustomHeader from "../components/CustomHeader";
import { useTranslation } from "react-i18next";

export const About = ({ navigation, route }) => {
  const { t, i18n } = useTranslation();
  return (
    <SafeAreaView style={{ ...ConstantStyle.container }}>
      <CustomHeader navigation={navigation} title={t("about")} />
      <View
        style={{
          backgroundColor: Colors.white,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          flex: 1,
        }}
      >
        <View style={{ marginTop: 15, flexDirection: "column", flex: 1 }}>
          <View style={{ marginHorizontal: 15 }}>
            <Text style={{ ...Fonts.Black16Bold }}>{t("term_of_use")}</Text>
            <Text
              style={{
                ...Fonts.Black14Medium,
                marginVertical: 8,
                textAlign: "left",
              }}
            >
              {t("lorem_1")}
            </Text>
            <Text style={{ ...Fonts.Black14Medium }}>{t("lorem_2")}</Text>
          </View>
          <View style={{ marginHorizontal: 15, marginTop: 15 }}>
            <Text style={{ ...Fonts.Black16Bold }}>
              {t("open_source_libraries")}
            </Text>
            <Text
              style={{
                ...Fonts.Black14Medium,
                marginVertical: 8,
                textAlign: "left",
              }}
            >
              {t("lorem_1")}
            </Text>
            <Text style={{ ...Fonts.Black14Medium }}>{t("lorem_2")}</Text>
          </View>
          <View style={{ marginHorizontal: 15, marginTop: 15 }}>
            <Text style={{ ...Fonts.Black16Bold }}>
              {t("application_versions")}
            </Text>
            <Text
              style={{
                ...Fonts.Grey16Medium,
                marginVertical: 5,
                textAlign: "left",
              }}
            >
              {t("versions")}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
