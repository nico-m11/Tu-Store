import React, { useState } from "react";
import { SafeAreaView, Text, View,ScrollView} from "react-native";
import MainButton from "../components/MainButton";
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
      <ScrollView>
      <View
        style={{
          backgroundColor: Colors.white,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          flex: 1,
        }}
      >
        <View style={{ marginHorizontal: 15, marginVertical: 25 }}>
              <MainButton name={t("questions")}  onPress={() =>
                        navigation.navigate("Survery", {
                          //item: element,
                        })
                      } />
        </View>
        <View style={{ marginTop: 15, marginHorizontal: 15 }}>
          <Text style={{ ...Fonts.Black18Bold }}>{t("treatment")}</Text>
          <Text style={{ ...Fonts.Black14Medium }}>{t("Text_treatment")}</Text>
          <Text style={{ ...Fonts.Black18Bold, marginTop: 15 }}> {t("object")} </Text>
          <Text style={{ ...Fonts.Black14Medium }}>{t("Text_object")}</Text>
          <Text style={{ ...Fonts.Black18Bold, marginTop: 15 }}> {t("treatment_low")} </Text>
          <Text style={{ ...Fonts.Black14Medium }}>{t("tratment_low_text")}</Text>
          <Text style={{ ...Fonts.Black18Bold, marginTop: 15 }}> {t("mood_treat")} </Text>
          <Text style={{ ...Fonts.Black14Medium }}>{t("mood_text")}</Text>
          <Text style={{ ...Fonts.Black18Bold, marginTop: 15 }}> {t("data_consequence")} </Text>
          <Text style={{ ...Fonts.Black14Medium }}>{t("data_con_text")}</Text>
          <Text style={{ ...Fonts.Black18Bold, marginTop: 15 }}> {t("data_access")} </Text>
          <Text style={{ ...Fonts.Black14Medium }}>{t("data_access_text")}</Text>
          <Text style={{ ...Fonts.Black18Bold, marginTop: 15 }}> {t("data_comunication")} </Text>
          <Text style={{ ...Fonts.Black14Medium }}>{t("data_com_text")}</Text>
          <Text style={{ ...Fonts.Black18Bold, marginTop: 15 }}> {t("Rights")} </Text>
          <Text style={{ ...Fonts.Black14Medium }}>{t("rights_text")}</Text>

        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};
