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
  console.log(item)
  const { t, i18n } = useTranslation();
  const width = Dimensions.get("window").width - 60;
  return (
    <SafeAreaView style={{ ...ConstantStyle.container }}>
      <CustomHeader navigation={navigation} title={item.name} isStar={false} />
      <View
        style={{
          backgroundColor: Colors.white,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          flex: 1,
        }}
      >
        <View style={{ marginTop: 15 }}>
          <ScrollView showsVerticalScrollIndicator={true}>
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

                <Text>
                  Benvenuto
                </Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text> Hello</Text>
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

              <Text>

                Benvenuto
              </Text>

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
                }}
              >
                <Text style={{ ...Fonts.Black16Regular }}>{t("website")}</Text>
                <Link
                  href="#"
                  _text={{ ...Fonts.Primary16Medium }}
                >
                  https://#
                </Link>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
