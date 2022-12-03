import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";
import { Colors } from "../../themes/colors";
import CustomHeader from "../components/CustomHeader";
import { useTranslation } from "react-i18next";

export const Privacy = ({ navigation, route }) => {
  const { t, i18n } = useTranslation();
  return (
    <SafeAreaView style={{ ...ConstantStyle.container }}>
      <CustomHeader navigation={navigation} title={t("privacy_policy")} />
      <View
        style={{
          backgroundColor: Colors.white,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          flex: 1,
        }}
      >
        <View style={{ marginTop: 15, marginHorizontal: 15 }}>
          <Text style={{ ...Fonts.Black18Bold }}>{t("privacy")}</Text>
          <Text style={{ ...Fonts.Black14Medium }}>{t("lorem_7")}</Text>
          <Text style={{ ...Fonts.Black18Bold, marginTop: 15 }}>
            {t("term_of_use")}
          </Text>
          <Text style={{ ...Fonts.Black14Medium }}>{t("lorem_8")}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
