import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { Button } from "native-base";
import { Fonts } from "../../themes/fonts";
//import { TextInput } from 'react-native-paper';
import { Colors } from "../../themes/colors";
import ConstantStyle from "../../themes/styles";
import CustomHeader from "../components/CustomHeader";
import { useTranslation } from "react-i18next";
import Loader from "../components/Loader";
import { CreditCardInput } from "react-native-credit-card-input";
import MainButton from "../components/MainButton";

export const BankDetails = ({ navigation }) => {
  const [date, setDate] = useState("");
  const [loader, setLoader] = useState(false);
  const { t, i18n } = useTranslation();
  const loaderShow = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      navigation.navigate("PaymentSuccess");
    }, 1000);
  };
  return (
    <SafeAreaView style={ConstantStyle.container}>
      <CustomHeader
        screenName={t("BankDetais")}
        navigation={navigation}
        title={t("Insert bank details")}
      />
      <View style={{ marginHorizontal: 15 }}>
        <CreditCardInput
          onChange={(form) => {}}
          cardFontFamily="Roboto-Regular"
        />
      </View>
   
      <View style={{ margin: 15, flex: 1, justifyContent: "flex-end" }}>
            <MainButton
              name={t("save")}
              onPress={() => {
                setModalVisible(true);
              }}
            />
          </View>
      <Loader visible={loader} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
        color: Colors.blackOpacity,
        marginTop: 10,
        backgroundColor: Colors.white,
        flex: 0.9,
        marginRight: 10
    },
});
