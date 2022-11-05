import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";
import { Colors } from "../../themes/colors";
import CustomHeader from "../components/CustomHeader";
import { LinearGradient } from "expo-linear-gradient";
import { LineChart } from "react-native-chart-kit";
import { Link } from "native-base";
import { useTranslation } from "react-i18next";

export const CoinDetails = ({ navigation, route }) => {
  const item = route.params.item;
  const { t, i18n } = useTranslation();
  const width = Dimensions.get("window").width - 60;
  return (
    <SafeAreaView style={{ ...ConstantStyle.container }}>
      <CustomHeader navigation={navigation} title={item.name} isStar={true} />
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
                backgroundColor: Colors.white,
                borderRadius: 10,
                marginTop: 10,
                marginHorizontal: 15,
                marginBottom: 25,
                paddingTop: 15,
                ...ConstantStyle.shadow,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: 10,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      width: 40,
                      height: 40,
                      marginRight: 15,
                    }}
                  />
                  <Text style={{ ...Fonts.Black16Bold }}>{item.name}</Text>
                </View>
                <View>
                  <Text style={{ ...Fonts.Black16Medium }}>
                    {item.current_price}
                  </Text>
                  <Text style={{ ...Fonts.Green14Medium }}>{item.market}</Text>
                </View>
              </View>
              <View style={{ alignItems: "center" }}>
                <LineChart
                  data={{
                    labels: ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
                    datasets: [
                      {
                        data: [
                          Math.random() * 100,
                          Math.random() * 100,
                          Math.random() * 100,
                          Math.random() * 100,
                          Math.random() * 100,
                          Math.random() * 100,
                          Math.random() * 100,
                        ],
                      },
                    ],
                  }}
                  width={width} // from react-native
                  height={220}
                  yAxisLabel="$ "
                  yAxisInterval={1} // optional, defaults to 1
                  chartConfig={{
                    backgroundColor: "#ffffff",
                    backgroundGradientFrom: "#fff",
                    backgroundGradientTo: "#fff",
                    color: (opacity = 1) => `#00D6D6`,
                    labelColor: (opacity = 1) => `#00D6D6`,
                    style: {
                      borderRadius: 16,
                    },
                    propsForDots: {
                      r: "3",
                      strokeWidth: "0.1",
                      stroke: "#00D6D6",
                    },
                    propsForLabels: {
                      fontSize: 12,
                      fontFamily: "Mulish-Regular",
                      flex: 1,
                    },
                  }}
                  bezier
                  withHorizontalLines={false}
                  withVerticalLines={false}
                  verticalLabelRotation={-50}
                  style={{
                    marginVertical: 15,
                    borderRadius: 16,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                paddingHorizontal: 8,
                marginBottom: 25,
              }}
            >
              <View style={{ width: "50%", paddingHorizontal: 7 }}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate("BuyBitcoin", { name: t("buy") })
                  }
                  style={{ ...ConstantStyle.btnShadow, borderRadius: 10 }}
                >
                  <LinearGradient
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      height: 45,
                      borderRadius: 10,
                    }}
                    colors={["#0076DE", "#00D6D6"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                  >
                    <Text style={{ ...Fonts.White18Bold }}>{t("buy")}</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
              <View style={{ width: "50%", paddingHorizontal: 7 }}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate("BuyBitcoin", { name: t("sell") })
                  }
                >
                  <LinearGradient
                    colors={["#0076DE", "#00D6D6"]}
                    start={{ x: 0.0, y: 1.0 }}
                    end={{ x: 1.0, y: 1.0 }}
                    style={{ height: 45, borderRadius: 10 }}
                  >
                    <View
                      style={{
                        flex: 1.0,
                        alignSelf: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#ffffff",
                        width: "99%",
                        margin: 1,
                        borderRadius: 10,
                      }}
                    >
                      <Text style={{ ...Fonts.Black18Bold }}>{t("sell")}</Text>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                backgroundColor: Colors.white,
                borderRadius: 10,
                marginHorizontal: 15,
                marginBottom: 25,
                paddingVertical: 15,
                ...ConstantStyle.shadow,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: 10,
                  marginBottom: 10,
                }}
              >
                <Text style={{ ...Fonts.Black16Regular }}>
                  {t("market_cap")}
                </Text>
                <Text style={{ ...Fonts.Black16Bold }}>
                  924,962,788,244 USD
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: 10,
                  marginBottom: 10,
                }}
              >
                <Text style={{ ...Fonts.Black16Regular }}>
                  {t("circulating_supply")}
                </Text>
                <Text style={{ ...Fonts.Black16Bold }}>18,892,112 BTC</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: 10,
                  marginBottom: 10,
                }}
              >
                <Text style={{ ...Fonts.Black16Regular }}>
                  {t("total_supply")}
                </Text>
                <Text style={{ ...Fonts.Black16Bold }}>18,892,112 BTC</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: 10,
                  marginBottom: 10,
                }}
              >
                <Text style={{ ...Fonts.Black16Regular }}>
                  {t("max_supply")}
                </Text>
                <Text style={{ ...Fonts.Black16Bold }}>21,000,000 BTC</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: 10,
                }}
              >
                <Text style={{ ...Fonts.Black16Regular }}>{t("website")}</Text>
                <Link
                  href="https://Coinb.com/danniei"
                  _text={{ ...Fonts.Primary16Medium }}
                >
                  https://Coinb.com/danniei
                </Link>
              </View>
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text style={{ ...Fonts.Black16Bold, marginHorizontal: 15 }}>
                {t("what_is")} {" Bitcoin?"}
              </Text>
              <Text
                style={{
                  ...Fonts.Black14Medium,
                  marginHorizontal: 15,
                  textAlign: "left",
                }}
              >
                {t("lorem_3")}
              </Text>
            </View>
            <View style={{ marginBottom: 25 }}>
              <Text style={{ ...Fonts.Black16Bold, marginHorizontal: 15 }}>
                {t("why_is_the_buy_price")}
              </Text>
              <Text
                style={{
                  ...Fonts.Black14Medium,
                  marginHorizontal: 15,
                  textAlign: "left",
                }}
              >
                {t("lorem_3")}
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
