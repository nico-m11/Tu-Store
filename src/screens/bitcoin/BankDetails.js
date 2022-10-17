import React, { useState } from "react";
import { SafeAreaView, Text, View, Dimensions } from "react-native";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";
import { Colors } from "../../themes/colors";
import CustomHeader from "../components/CustomHeader";
import { Input } from "react-native-elements";
import { Radio } from "native-base";
import MainButton from "../components/MainButton";
import SuccessModel from "../components/SuccessModel";
import DropDownPicker from "react-native-dropdown-picker";
import { useTranslation } from "react-i18next";

export const BankDetails = ({ navigation, route }) => {
  const { t, i18n } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const { height, width } = Dimensions.get("window");
  const [items, setItems] = useState([
    { label: "State Bank of India", value: "State Bank of India" },
    { label: "IDFC Bank", value: "IDFC Bank" },
    { label: "Kotak Bank", value: "Kotak Bank" },
    { label: "Bank of Baroda ", value: "Bank of Baroda " },
    { label: "ICICI Bank", value: "ICICI Bank" },
    { label: "Indian Bank", value: "Indian Bank" },
    { label: "Punjab National Bank", value: "Punjab National Bank" },
    { label: "Axis Bank", value: "Axis Bank" },
    { label: "Stat Bank of jaipur", value: "Stat Bank of jaipur" },
    { label: "State Bank of Hyderabad", value: "State Bank of Hyderabad" },
    { label: "Vijaya Bank", value: "Vijaya Bank" },
    { label: "UCO bank", value: "UCO bank" },
    { label: "Yes Bank", value: "Yes Bank" },
    { label: "Karur Vysya Bank", value: "Karur Vysya Bank" },
    { label: "Laxmi Vilas Bank-", value: "Laxmi Vilas Bank-" },
  ]);
  return (
    <SafeAreaView style={{ ...ConstantStyle.container }}>
      <CustomHeader navigation={navigation} title={t("bank_details")} />
      <View
        style={{
          backgroundColor: Colors.white,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          flex: 1,
        }}
      >
        <View style={{ marginTop: 15, flexDirection: "column", flex: 1 }}>
          <View style={{ flex: 3 }}>
            <View style={{ marginHorizontal: 15 }}>
              <Text style={{ ...Fonts.Grey14Bold, marginVertical: 7 }}>
                {t("select_your_bank_title")}
              </Text>
              <DropDownPicker
                placeholder={t("select_bank_placeholder")}
                placeholderStyle={{ ...Fonts.Grey14Medium }}
                labelStyle={{ ...Fonts.Black14Medium }}
                listItemLabelStyle={{ ...Fonts.Black14Medium }}
                style={{
                  borderWidth: 0,
                  marginBottom: 10,
                  height: 45,
                  ...ConstantStyle.shadow,
                }}
                dropDownContainerStyle={{
                  borderWidth: 0,
                  ...ConstantStyle.shadow,
                }}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
              />
            </View>
            <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
              {t("account_number")}
            </Text>
            <Input
              placeholder={t("account_number")}
              containerStyle={{
                marginTop: 8,
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
                width: width - 30,
                height: 45,
              }}
              inputStyle={{ ...Fonts.Black14Medium }}
              secureTextEntry={false}
              keyboardType="number-pad"
            />
            <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
              {t("ifsc_code")}
            </Text>
            <Input
              placeholder={t("ifsc_placeholder")}
              containerStyle={{
                marginTop: 8,
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
                width: width - 30,
                height: 45,
              }}
              inputStyle={{ ...Fonts.Black14Medium }}
              secureTextEntry={false}
              keyboardType="number-pad"
            />
            <Text
              style={{
                ...Fonts.Grey14Bold,
                marginHorizontal: 15,
                marginBottom: 5,
              }}
            >
              {t("select_account_type")}
            </Text>
            <Radio.Group
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
              defaultValue="Saving"
              name="myRadioGroup"
              accessibilityLabel="Pick your favorite number"
            >
              <Radio value="Saving" _text={{ ...Fonts.Black14Medium }}>
                {t("saving")} {"  "}
              </Radio>
              <Radio value="Current" _text={{ ...Fonts.Black14Medium }}>
                {t("current")}
              </Radio>
            </Radio.Group>
          </View>
          <View style={{ margin: 15, flex: 1, justifyContent: "flex-end" }}>
            <MainButton
              name={t("save")}
              onPress={() => {
                setModalVisible(true);
              }}
            />
          </View>
        </View>
      </View>
      <SuccessModel
        modalVisible={modalVisible}
        isBank={true}
        onPress={() => {
          navigation.goBack();
          setModalVisible(!modalVisible);
        }}
      />
    </SafeAreaView>
  );
};
