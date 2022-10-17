import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  BackHandler,
} from "react-native";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";
import { Colors } from "../../themes/colors";
import CustomHeader from "../components/CustomHeader";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import PortfolioData from "../../data/PortfolioData";
import { useTranslation } from "react-i18next";
import ExitModel from "../components/ExitModel";

export const PortfolioScreen = ({ navigation }) => {
  const { height, width } = Dimensions.get("window");
  const { t, i18n } = useTranslation();

  const [exitModel, setExitModel] = useState(false);
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  const backAction = () => {
    if (navigation.isFocused()) {
      setExitModel(!exitModel);
      return true;
    }
  };

  return (
    <SafeAreaView style={{ ...ConstantStyle.container }}>
      <CustomHeader
        navigation={navigation}
        isMain={true}
        title={t("portfolio")}
      />
      <View
        style={{
          backgroundColor: Colors.white,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          flex: 1,
        }}
      >
        <View style={{ marginTop: 15 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 15,
                marginTop: 10,
                marginBottom: 25,
              }}
            >
              <View
                style={{
                  borderRadius: 10,
                  backgroundColor: Colors.white,
                  paddingHorizontal: 8,
                  paddingVertical: 15,
                  width: "30%",
                  ...ConstantStyle.shadow,
                }}
              >
                <Text numberOfLines={1} style={{ ...Fonts.Grey14Medium }}>
                  {t("current_value")}
                </Text>
                <Text style={{ ...Fonts.Black16Bold, textAlign: "center" }}>
                  $ 450396
                </Text>
              </View>
              <View
                style={{
                  borderRadius: 10,
                  backgroundColor: Colors.white,
                  paddingHorizontal: 8,
                  paddingVertical: 15,
                  width: "30%",
                  alignItems: "center",
                  ...ConstantStyle.shadow,
                }}
              >
                <Text numberOfLines={1} style={{ ...Fonts.Grey14Medium }}>
                  {t("invest_value")}
                </Text>
                <Text style={{ ...Fonts.Black16Bold, textAlign: "center" }}>
                  $ 428636
                </Text>
              </View>
              <View
                style={{
                  borderRadius: 10,
                  paddingVertical: 15,
                  width: "30%",
                  alignItems: "center",
                  backgroundColor: Colors.white,
                  ...ConstantStyle.shadow,
                }}
              >
                <Text numberOfLines={1} style={{ ...Fonts.Grey14Medium }}>
                  {t("gain_loss")}
                </Text>
                <Text style={{ ...Fonts.Primary16Bold, color: Colors.green }}>
                  +5.2%
                </Text>
              </View>
            </View>
            <View style={{ alignItems: "center", marginHorizontal: 15 }}>
              <LinearGradient
                colors={["#0076DE", "#00D6D6"]}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 1.0 }}
                style={{
                  width: width - 30,
                  backgroundColor: Colors.white,
                  borderRadius: 10,
                  alignItems: "center",
                  marginTop: 45,
                  ...ConstantStyle.shadow,
                }}
              >
                <View
                  style={{
                    margin: 2,
                    width: "99%",
                    backgroundColor: Colors.white,
                    borderRadius: 10,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      width: 90,
                      height: 90,
                      backgroundColor: "#B8D3EA",
                      borderRadius: 50,
                      alignItems: "center",
                      justifyContent: "center",
                      top: -50,
                      marginBottom: -50,
                      ...ConstantStyle.shadow,
                    }}
                  >
                    <View
                      style={{
                        width: 70,
                        height: 70,
                        backgroundColor: Colors.primary,
                        borderRadius: 50,
                        alignItems: "center",
                        justifyContent: "center",
                        ...ConstantStyle.shadow,
                      }}
                    >
                      <Ionicons
                        name="wallet-sharp"
                        size={40}
                        color={Colors.white}
                      />
                    </View>
                  </View>
                  <View style={{ marginVertical: 15, alignItems: "center" }}>
                    <Text style={{ ...Fonts.Black16Bold }}>
                      {t("total_usd_balance")}
                    </Text>
                    <Text style={{ ...Fonts.Black22Bold }}>$7431.87</Text>
                    <Text style={{ ...Fonts.Green14Medium }}>+6.54%</Text>
                  </View>
                </View>
              </LinearGradient>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 15,
                marginVertical: 25,
              }}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() =>
                  navigation.navigate("Deposit", {
                    name: t("deposit"),
                    isDeposit: true,
                  })
                }
                style={{
                  width: "30%",
                  height: 40,
                  borderWidth: 2,
                  borderRadius: 10,
                  borderColor: Colors.primary,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ ...Fonts.Primary16Bold }}>{t("deposit")}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() =>
                  navigation.navigate("Deposit", {
                    name: t("withdraw"),
                    isDeposit: false,
                  })
                }
                style={{
                  width: "30%",
                  height: 40,
                  borderWidth: 2,
                  borderRadius: 10,
                  borderColor: Colors.primary,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ ...Fonts.Primary16Bold }}>{t("withdraw")}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate("History")}
                style={{
                  width: "30%",
                  height: 40,
                  borderWidth: 2,
                  borderRadius: 10,
                  borderColor: Colors.primary,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ ...Fonts.Primary16Bold }}>{t("history")}</Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                ...Fonts.Black16Bold,
                marginHorizontal: 15,
                marginBottom: 10,
              }}
            >
              {t("my_assets")}
            </Text>
            <View style={{ marginBottom: 10 }}>
              {PortfolioData.length > 0
                ? PortfolioData.map((item, index) => {
                    return (
                      <View key={index + ""}>
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate("CoinDetails", {
                              item: item.item,
                            })
                          }
                          style={{
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexDirection: "row",
                          }}
                        >
                          <View
                            style={{ alignItems: "center", marginLeft: 15 }}
                          >
                            <Image
                              source={{ uri: item.item.image }}
                              style={{ width: 45, height: 45 }}
                            />
                          </View>
                          <View style={{ flex: 1, marginHorizontal: 15 }}>
                            <View
                              style={{
                                alignItems: "center",
                                justifyContent: "space-between",
                                flexDirection: "row",
                              }}
                            >
                              <Text style={{ ...Fonts.Black16Medium }}>
                                {item.item.name}
                              </Text>
                              <View>
                                <Text style={{ ...Fonts.Black16Bold }}>
                                  {item.item.current_price}
                                </Text>
                                {item.item.top_gainers ? (
                                  <Text style={{ ...Fonts.Green14Medium }}>
                                    {item.item.top_gainers}
                                  </Text>
                                ) : null}
                                {item.item.top_losers ? (
                                  <Text style={{ ...Fonts.Red14Medium }}>
                                    {item.item.top_losers}
                                  </Text>
                                ) : null}
                              </View>
                            </View>
                          </View>
                        </TouchableOpacity>
                        <View
                          style={{
                            width: width,
                            height: 2,
                            backgroundColor: "#F0F0F0",
                            marginVertical: 8,
                          }}
                        ></View>
                      </View>
                    );
                  })
                : null}
            </View>
          </ScrollView>
        </View>
      </View>
      <ExitModel
        onCancel={() => setExitModel(!exitModel)}
        title={t("exit_Text")}
        cancel={t("cancel")}
        btnName={t("exit")}
        btnOnPress={() => BackHandler.exitApp()}
        visible={exitModel}
      />
    </SafeAreaView>
  );
};
