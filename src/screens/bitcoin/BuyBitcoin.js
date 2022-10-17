import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";
import { Colors } from "../../themes/colors";
import CustomHeader from "../components/CustomHeader";
import { Input } from "react-native-elements";
import MainButton from "../components/MainButton";
import SuccessModel from "../components/SuccessModel";
import { useTranslation } from "react-i18next";

export const BuyBitcoin = ({ navigation, route }) => {
  const { height, width } = Dimensions.get("window");
  const { t, i18n } = useTranslation();
  const name = route.params.name;
  const [bgColor, setBgColor] = useState("1");
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={{ ...ConstantStyle.container }}>
      <CustomHeader navigation={navigation} title={name + t(" bitcoin")} />
      <View
        style={{
          backgroundColor: Colors.white,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          flex: 1,
        }}
      >
        <ScrollView
          style={{ marginTop: 15 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ flex: 2 }}>
            <Text
              style={{
                ...Fonts.Black16Bold,
                marginHorizontal: 15,
                marginTop: 5,
                textAlign: "left",
              }}
            >
              "BTC to " {name}
            </Text>
            <View style={{ marginTop: 10 }}>
              <Input
                placeholder={t("amount")}
                containerStyle={{
                  marginBottom: -23,
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
                inputContainerStyle={{
                  borderBottomWidth: 0,
                  ...ConstantStyle.shadow,
                  backgroundColor: Colors.white,
                  borderRadius: 10,
                  paddingHorizontal: 15,
                  width: width - 30,
                  height: 45,
                }}
                inputStyle={{ ...Fonts.Black14Medium }}
                secureTextEntry={false}
                keyboardType="number-pad"
              />
            </View>
            <Text
              style={{
                ...Fonts.Black16Bold,
                marginHorizontal: 15,
                marginTop: 20,
              }}
            >
              {t("leverage_optional")}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 15,
                marginTop: 10,
              }}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setBgColor("1")}
                style={{
                  backgroundColor:
                    bgColor == "1" ? Colors.primary : Colors.white,
                  width: 50,
                  height: 35,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                  ...ConstantStyle.shadow,
                }}
              >
                <Text
                  style={
                    bgColor == "1" ? Fonts.White14Medium : Fonts.Grey14Regular
                  }
                >
                  1x
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setBgColor("10")}
                style={{
                  backgroundColor:
                    bgColor == "10" ? Colors.primary : Colors.white,
                  width: 50,
                  height: 35,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                  ...ConstantStyle.shadow,
                }}
              >
                <Text
                  style={
                    bgColor == "10" ? Fonts.White14Medium : Fonts.Grey14Regular
                  }
                >
                  10x
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setBgColor("20")}
                style={{
                  backgroundColor:
                    bgColor == "20" ? Colors.primary : Colors.white,
                  width: 50,
                  height: 35,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                  ...ConstantStyle.shadow,
                }}
              >
                <Text
                  style={
                    bgColor == "20" ? Fonts.White14Medium : Fonts.Grey14Regular
                  }
                >
                  20x
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setBgColor("50")}
                style={{
                  backgroundColor:
                    bgColor == "50" ? Colors.primary : Colors.white,
                  width: 50,
                  height: 35,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                  ...ConstantStyle.shadow,
                }}
              >
                <Text
                  style={
                    bgColor == "50" ? Fonts.White14Medium : Fonts.Grey14Regular
                  }
                >
                  50x
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setBgColor("100")}
                style={{
                  backgroundColor:
                    bgColor == "100" ? Colors.primary : Colors.white,
                  width: 43,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                  ...ConstantStyle.shadow,
                }}
              >
                <Text
                  style={
                    bgColor == "100" ? Fonts.White14Medium : Fonts.Grey14Regular
                  }
                >
                  100x
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setBgColor("200")}
                style={{
                  backgroundColor:
                    bgColor == "200" ? Colors.primary : Colors.white,
                  width: 50,
                  height: 35,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                  ...ConstantStyle.shadow,
                }}
              >
                <Text
                  style={
                    bgColor == "200" ? Fonts.White14Medium : Fonts.Grey14Regular
                  }
                >
                  200x
                </Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                ...Fonts.Black16Bold,
                marginHorizontal: 15,
                marginTop: 20,
              }}
            >
              {t("stop_loss")}
            </Text>
            <View style={{ marginTop: 10 }}>
              <Input
                placeholder={t("price_level_placeholder")}
                containerStyle={{
                  marginBottom: -23,
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
                inputContainerStyle={{
                  borderBottomWidth: 0,
                  ...ConstantStyle.shadow,
                  backgroundColor: Colors.white,
                  borderRadius: 10,
                  paddingHorizontal: 15,
                  width: width - 30,
                  height: 45,
                }}
                inputStyle={{ ...Fonts.Black14Medium }}
                secureTextEntry={false}
                keyboardType="number-pad"
              />
              <Text
                style={{
                  ...Fonts.Black16Bold,
                  marginHorizontal: 15,
                  marginTop: 20,
                }}
              >
                {t("take_profit")}
              </Text>
              <View style={{ marginTop: 10 }}>
                <Input
                  placeholder={t("price_level_placeholder")}
                  containerStyle={{
                    marginBottom: -23,
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                  inputContainerStyle={{
                    borderBottomWidth: 0,
                    ...ConstantStyle.shadow,
                    backgroundColor: Colors.white,
                    borderRadius: 10,
                    paddingHorizontal: 15,
                    width: width - 30,
                    height: 45,
                  }}
                  inputStyle={{ ...Fonts.Black14Medium }}
                  secureTextEntry={false}
                  keyboardType="number-pad"
                />
              </View>
              <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginHorizontal: 10,
                    marginBottom: 10,
                  }}
                >
                  <Text style={{ ...Fonts.Black16Regular }}>
                    {t("usd_require")}
                  </Text>
                  <Text style={{ ...Fonts.Black16Bold }}>$ 0.00</Text>
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
                    {t("commission")}
                  </Text>
                  <Text style={{ ...Fonts.Black16Bold }}>$ 0.00</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginHorizontal: 10,
                    marginBottom: 10,
                  }}
                >
                  <Text style={{ ...Fonts.Black16Regular }}>{t("total")}</Text>
                  <Text style={{ ...Fonts.Black16Bold }}>$ 0.00</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            justifyContent: "flex-end",
            marginHorizontal: 15,
            marginBottom: 15,
          }}
        >
          <MainButton
            name={name + "BTC"}
            onPress={() => setModalVisible(true)}
          />
        </View>
      </View>
      <SuccessModel
        modalVisible={modalVisible}
        name={name}
        isName={true}
        onPress={() => {
          setModalVisible(!modalVisible);
          navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
};
