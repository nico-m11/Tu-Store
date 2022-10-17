import React, { useState } from "react";
import { SafeAreaView, Text, View, KeyboardAvoidingView } from "react-native";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";
import { Colors } from "../../themes/colors";
import CustomHeader from "../components/CustomHeader";
import { Input } from "react-native-elements";
import { TextArea } from "native-base";
import MainButton from "../components/MainButton";
import SuccessModel from "../components/SuccessModel";
import { useTranslation } from "react-i18next";

export const Help = ({ navigation, route }) => {
  const { t, i18n } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={{ ...ConstantStyle.container }}>
      <CustomHeader navigation={navigation} title={t("help_support")} />
      <View
        style={{
          backgroundColor: Colors.white,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          flex: 1,
        }}
      >
        <View style={{ marginTop: 15, flexDirection: "column", flex: 1 }}>
          <View style={{}}>
            <Text style={{ ...Fonts.Black22Bold, textAlign: "center" }}>
              {t("get_in_touch")}
            </Text>
            <Text style={{ ...Fonts.Grey14Medium, textAlign: "center" }}>
              {t("fell_free_to..")}
            </Text>
            <View style={{ marginTop: 30 }}>
              <Input
                placeholder={t("enter_name_placeholder")}
                containerStyle={{
                  marginBottom: -10,
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
              />
              <Input
                placeholder={t("enter_email_placeholder")}
                containerStyle={{
                  marginTop: 10,
                  marginBottom: -10,
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
                keyboardType="email-address"
                secureTextEntry={false}
              />
              <View style={{ marginHorizontal: 16, ...ConstantStyle.shadow }}>
                <TextArea
                  shadow={"3"}
                  px={4}
                  backgroundColor={Colors.white}
                  borderWidth={0}
                  fontFamily="Mulish-Medium"
                  keyboardType="default"
                  fontSize={14}
                  h={40}
                  selectionColor={Colors.lightgrey}
                  borderRadius={10}
                  placeholder={t("write_message_placeholder")}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 15,
              justifyContent: "flex-end",
              marginVertical: 50,
            }}
          >
            <MainButton
              name={t("submit")}
              onPress={() => setModalVisible(true)}
            />
          </View>
        </View>
      </View>
      <SuccessModel
        modalVisible={modalVisible}
        isSubmit={true}
        onPress={() => {
          navigation.goBack();
          setModalVisible(!modalVisible);
        }}
      />
    </SafeAreaView>
  );
};
