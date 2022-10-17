import React, { useState } from "react";
import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";
import { Colors } from "../../themes/colors";
import CustomHeader from "../components/CustomHeader";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Input } from "react-native-elements";
import MainButton from "../components/MainButton";
import SuccessModel from "../components/SuccessModel";
import { useTranslation } from "react-i18next";

export const Deposit = ({ navigation, route }) => {
  const { t, i18n } = useTranslation();
  const data = route.params;
  const [valueInput, setValueInput] = useState(3);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={{ ...ConstantStyle.container }}>
      <CustomHeader navigation={navigation} title={data.name} />
      <View
        style={{
          backgroundColor: Colors.white,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          flex: 1,
          flexDirection: "column",
        }}
      >
        <View
          style={{
            alignItems: "center",
            marginHorizontal: 15,
            flex: 2,
            justifyContent: "center",
          }}
        >
          <LinearGradient
            colors={["#0076DE", "#00D6D6"]}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 1.0 }}
            style={{
              width: "100%",
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
                  {t("current_balance")}
                </Text>
                <Text style={{ ...Fonts.Black22Bold }}>$7431.87</Text>
              </View>
            </View>
          </LinearGradient>
        </View>
        <View style={{ marginTop: 20, flex: 2, justifyContent: "flex-start" }}>
          <Text style={{ ...Fonts.Grey18Medium, marginHorizontal: 15 }}>
            {t("amount")}
          </Text>
          <Input
            placeholder="Value"
            value={valueInput + ""}
            onChangeText={(changeText) => {
              setValueInput(changeText);
            }}
            containerStyle={{
              marginTop: 5,
              marginBottom: -17,
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
              width: "97%",
              height: 45,
            }}
            inputStyle={{ ...Fonts.Black14Medium }}
            secureTextEntry={false}
            keyboardType="number-pad"
            maxLength={5}
            leftIcon={
              <Text style={{ ...Fonts.Black14Medium, marginLeft: 10 }}>$</Text>
            }
          />
          <View
            style={{
              marginVertical: 15,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setValueInput(10)}
              style={{
                backgroundColor: Colors.lightgrey,
                padding: 10,
                borderRadius: 10,
                marginHorizontal: 10,
              }}
            >
              <Text style={{ ...Fonts.Black14Medium }}>$10</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setValueInput(50)}
              style={{
                backgroundColor: Colors.lightgrey,
                padding: 10,
                borderRadius: 10,
                marginHorizontal: 10,
              }}
            >
              <Text style={{ ...Fonts.Black14Medium }}>$50</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setValueInput(100)}
              style={{
                backgroundColor: Colors.lightgrey,
                padding: 10,
                borderRadius: 10,
                marginHorizontal: 10,
              }}
            >
              <Text style={{ ...Fonts.Black14Medium }}>$100</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setValueInput(500)}
              style={{
                backgroundColor: Colors.lightgrey,
                padding: 10,
                borderRadius: 10,
                marginHorizontal: 10,
              }}
            >
              <Text style={{ ...Fonts.Black14Medium }}>$500</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ ...Fonts.Black14Bold, textAlign: "center" }}>
            {data.isDeposit ? t("add_minimum_amount") : "Withdraw Min $3 "}
          </Text>
        </View>
        <View style={{ margin: 15, flex: 2, justifyContent: "flex-end" }}>
          <MainButton name={data.name} onPress={() => setModalVisible(true)} />
        </View>
      </View>
      <SuccessModel
        modalVisible={modalVisible}
        title={data.name}
        isTitle={true}
        value={valueInput}
        onPress={() => {
          setModalVisible(!modalVisible);
          navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
};
