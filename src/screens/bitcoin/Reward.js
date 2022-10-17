import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";
import { Colors } from "../../themes/colors";
import CustomHeader from "../components/CustomHeader";
import MainButton from "../components/MainButton";
import { FontAwesome5 } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import * as Clipboard from "expo-clipboard";
import { useToast, Box } from "native-base";
import Slider from "../components/Slider";
export const Reward = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  const copyToClipboard = () => {
    Clipboard.setString("https://Coinb.com/danniei");
    toast.show({
      render: () => {
        return (
          <Box
            bg={{
              linearGradient: {
                colors: ["#0076DE", "#00D6D6"],
                start: [0, 0],
                end: [1, 0],
              },
            }}
            px="4"
            py="2"
            rounded="md"
            mb={5}
            _text={{ ...Fonts.White14Medium }}
          >
            {t("copy")}
          </Box>
        );
      },
    });
  };
  const toast = useToast();
  return (
    <SafeAreaView style={{ ...ConstantStyle.container }}>
      <CustomHeader navigation={navigation} title={t("reward")} />
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: Colors.white,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingTop: 20,
          paddingHorizontal: 15,
        }}
      >
        <View
          style={{ flex: 2.5, alignItems: "center", justifyContent: "center" }}
        >
          <Slider />
        </View>
        <View
          style={{ flex: 1.5, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ ...Fonts.Black22Bold }}>{t("invite_friend")}</Text>
          <Text
            style={{
              ...Fonts.Black16Medium,
              marginHorizontal: 30,
              textAlign: "center",
              marginVertical: 10,
            }}
          >
            {t("invite_text")}
          </Text>
        </View>
        <View style={{ flex: 1.5, justifyContent: "center" }}>
          <Text style={{ ...Fonts.Black22Bold }}>{t("copy_link")}</Text>
          <View
            style={{
              height: 50,
              borderWidth: 2,
              borderColor: Colors.grey,
              marginVertical: 15,
              borderStyle: "dashed",
              borderRadius: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 15,
              alignItems: "center",
            }}
          >
            <Text style={{ ...Fonts.Grey16Medium }}>
              https://Coinb.com/danniei
            </Text>
            <FontAwesome5
              name="copy"
              size={25}
              color={Colors.grey}
              onPress={() => copyToClipboard()}
            />
          </View>
          <View style={{ marginVertical: 20 }}>
            <MainButton name={t("invite")} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
