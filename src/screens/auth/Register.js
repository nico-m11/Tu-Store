import React, { useState, Component, useEffect, useCallback } from "react";
import {
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  SectionList,
  Image,
  Item,
  StatusBar,
  Pressable,
  ScrollView,
  StyleSheet,
  I18nManager,
  Dimensions,
  TextInput,
  Button,
  Alert,
  FlatList,
  BackHandler,
} from "react-native";
import Checkbox from "expo-checkbox";
import { Ionicons, Feather } from "@expo/vector-icons";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";
import { Colors } from "../../themes/colors";
import { Input } from "react-native-elements";
import MainButton from "../components/MainButton";
import { useTranslation } from "react-i18next";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import SelectDropdown from "react-native-select-dropdown";
import { SelectList } from "react-native-dropdown-select-list";
import SearchableDropdown from "react-native-searchable-dropdown";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useForm } from "react-hook-form";

export const RegisterScreen = ({ navigation }) => {
  useEffect(() => {
    //DataCustomer();
  }, []);
  const { height, width } = Dimensions.get("window");
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState([""]);

  const [customer_type, setCustomer_type] = useState([]);
  const [customerSelect, setCustomerSelect] = useState("");
  const [genderSelect, setGenderSelect] = useState("");
  const [maritialStatusSelect, setMaritialStatusSelect] = useState("");
  const [linkedin, setLinkedin] = useState('');
  const [job, setJob] = useState('');


  const [
    educational_qualification_select,
    Seteducational_qualification_select,
  ] = useState("");

  // const DataCustomer = () => {
  //   //setLoader(true)
  //   fetch(
  //     "https://api.tu-store.soluzionitop.cloud/api/dictionary?column=customer_type",
  //     {
  //       method: "GET",
  //       headers: {
  //         Authorization:
  //           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InAubWFyYXNjYTg5QGdtYWlsLmNvbSIsImlkIjo4LCJpYXQiOjE2NzExMzU1NjAsImV4cCI6MTY3MzgxMzk2MH0.wCfdYUq3PqSwfW4oGprlpNrYw4Sp2S-j3cla3h6L2SM",
  //       },
  //     }
  //   )
  //     .then((res) => {
  //       //setLoader(false)
  //       return res.json();
  //     })
  //     .then((value) => {
  //       //console.log(value);
  //       setCustomer_type(value.items);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const object_customer = Object.keys(customer_type).map(
    (key) => customer_type[key].name
  );

  const maritial_status = [
    "Nubile/Celibe",
    "Sposato/a",
    "Separato/a",
    "Divorziato/a",
    "Vedovo/a",
  ];
  const educational_qualification = ["diploma", "laurea", "dottorato"];

  const gender = ["M", "F"];

  // show and hide multiple input box
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleClick = (fieldName) => {
    setValues({
      ...values,
      showPassword: fieldName === values.showPassword ? "" : fieldName,
    });
  };

  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [step4, setStep4] = useState(false);

  const handlingStep = (step1, step2, step3, step4) => {
    setStep1(step1);
    setStep2(step2);
    setStep3(step3);
    setStep4(step4);

    if (step1 === true) {
      console.log("Step1");
    } else if (step2 === true) {
      console.log("Step2");
    } else if (step3 === true) {
      console.log("Step3");
    } else if (step4 === true) {
      console.log("Step4");
    }
  };

  const [date, setDate] = useState("");
  const [show, setShow] = useState(false);

  const onDateChange = (event, selectedDate) => {
    setShow(false);
    let newDate = new Date(selectedDate);
    newDate = newDate.toISOString().substring(0, 10);
    setDate(newDate);
  };

  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = useCallback((formData) => {
    
   formData.customersExtrafields = [{
      birth_date: date,
      customer_type: customerSelect,
      educational_qualification: educational_qualification_select,
      maritial_status: maritialStatusSelect,
      gender: genderSelect,
      job:job,
      linkedin:linkedin
  }];
  
    var formBody = formData;

    fetch("https://api.tu-store.soluzionitop.cloud/api/customers/registration", {
      method: "POST", //Request Type
      body: JSON.stringify(formBody), //post body
      headers: {
        //Header Defination
        "Content-Type":  "application/json",
        Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiYXBpIjoiY3VzdG9tZXJzL3JlZ2lzdHJhdGlvbiIsInByb2plY3QiOiJUVVN0b3JlIiwiaWF0IjoxNTE2MjM5MDIyfQ.-BW9IAKNsLYM-q57Eujecpp49FKgzEOfxIMdvbylIwg',
      },
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        alert(JSON.stringify(responseJson));
        console.log(responseJson);
      })
      //If response is not in json then in error
      .catch((error) => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  }, []);

  const onChangeField = useCallback(
    (name) => (text) => {
      setValue(name, text);
    },
    []
  );

  useEffect(() => {
    register("first_name");
    register("email");
    register("password");
  }, [register]);

  return (
    <SafeAreaView style={{ ...ConstantStyle.container }}>
      <View>
        <ImageBackground
          style={{
            width: width,
            height: height / 5,
            justifyContent: "flex-end",
            alignItems: "flex-start",
          }}
          source={require("../../../assets/images/header.png")}
        >
          <Feather
            name={I18nManager.isRTL ? "chevron-right" : "chevron-left"}
            size={30}
            color={Colors.white}
            style={{ marginHorizontal: 15 }}
            onPress={() => navigation.goBack()}
          />
          <View style={{ marginVertical: 20 }}>
            <Text style={{ ...Fonts.White24Bold, marginHorizontal: 15 }}>
              {t("sign_up")}
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View>
        <ImageBackground
          style={{
            width: width,
            height: height / 5,
            ...StyleSheet.absoluteFillObject,
          }}
          source={require("../../../assets/images/header.png")}
        ></ImageBackground>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: "white",
          flex: 1,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <View
          style={{
            paddingTop: 20,
          }}
        >
          {step1 == true ? (
            <>
              <Text style={{ textAlign: "center", fontSize: 20 }}>Step1</Text>
              <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
                {t("Name")}
              </Text>
              <Input
                placeholder={t("name")}
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
                autoCompleteType="name"
                keyboardType="name"
                textContentType="name"
                onChangeText={onChangeField("first_name")}
              />

              <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
                {t("Last Name")}
              </Text>

              <Input
                placeholder={t("Last Name")}
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
                autoCompleteType="lastName"
                keyboardType="lastName"
                textContentType="lastName"
                onChangeText={onChangeField("last_name")}
              />

              <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
                {t("email")}
              </Text>
              <Input
                placeholder={t("email")}
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
                autoCompleteType="email"
                keyboardType="email"
                textContentType="email"
                onChangeText={onChangeField("email")}
              />

              <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
                {t("mobile")}
              </Text>
              <Input
                placeholder={t("mobile")}
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
                maxLength={10}
                style={{ marginBottom: 20 }}
                onChangeText={onChangeField("mobile")}
              />

              <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
                {t("phone")}
              </Text>
              <Input
                placeholder={t("phone")}
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
                maxLength={10}
                style={{ marginBottom: 20 }}
                onChangeText={onChangeField("phone")}
              />

              <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
                {t("password")}
              </Text>
              <Input
                placeholder={t("password")}
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
                rightIcon={
                  <Ionicons
                    name={values.password === "Password" ? "eye" : "eye-off"}
                    style={{ marginLeft: 15 }}
                    color={Colors.grey}
                    size={20}
                  />
                }
                secureTextEntry={values.password === "Password" ? false : true}
                onChangeText={onChangeField("password")}
              />

              <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
                {t("confirm_password")}
              </Text>
              <Input
                placeholder={t("confirm_password")}
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
                rightIcon={
                  <Ionicons
                    name={
                      values.confirm_password === "confirm_password"
                        ? "eye"
                        : "eye-off"
                    }
                    style={{ marginLeft: 15 }}
                    color={Colors.grey}
                    size={20}
                    onPress={() => handleClick("confirm_password")}
                  />
                }
                secureTextEntry={
                  values.confirm_password === "confirm_password" ? false : true
                }
                //onChangeText={onChangeField("confirm_password")}
              />

              <View style={{ marginHorizontal: 15, marginVertical: 20 }}>
                <MainButton
                  name={t("Next")}
                  style={{
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 10,
                      height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,
                    elevation: 10,
                  }}
                  onPress={(e) => handlingStep(false, true, false, false)}
                />
              </View>
            </>
          ) : (
            <></>
          )}

          {step2 == true ? (
            <>
              <View>
                <Text style={{ textAlign: "center", fontSize: 20 }}>
                  Address
                </Text>
              </View>

              <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
                {t("Country")}
              </Text>

              <Input
                placeholder={t("country")}
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
                onChangeText={onChangeField("country")}
              />

              <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
                {t("Region")}
              </Text>
              <Input
                placeholder={t("Region")}
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
                onChangeText={onChangeField("region")}
              />

              <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
                {t("Province")}
              </Text>
              <Input
                placeholder={t("Province")}
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
                onChangeText={onChangeField("province")}
              />

              <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
                {t("City")}
              </Text>
              <Input
                placeholder={t("City")}
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
                onChangeText={onChangeField("city")}
              />

              <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
                {t("Zip Code")}
              </Text>
              <Input
                placeholder={t("Zip Code")}
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
                maxLength={6}
                onChangeText={onChangeField("zip_code")}
              />

              <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
                {t("Address")}
              </Text>
              <Input
                placeholder={t("Address")}
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
                onChangeText={onChangeField("address")}
              />

              <View style={{ marginHorizontal: 15, marginVertical: 20 }}>
                <MainButton
                  name={t("Next")}
                  style={{
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 10,
                      height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,
                    elevation: 10,
                  }}
                  onPress={(e) => handlingStep(false, false, true, false)}
                />
                <Button
                  color="#3740FE"
                  title="Back"
                  //disabled={!isValid}
                  //onPress={() => navigation.navigate("OtpScreen")}
                  onPress={(e) => handlingStep(true, false, false, false)}
                />
              </View>
            </>
          ) : (
            <></>
          )}

          {step3 == true ? (
            <>
              <Text style={{ textAlign: "center", fontSize: 20 }}>Step3</Text>

              <Text
                style={{
                  ...Fonts.Grey14Bold,
                  marginHorizontal: 15,
                  marginTop: 2,
                  marginBottom: -10,
                }}
              >
                {t("Customer type")}
              </Text>
              <View>
                <SelectDropdown
                  buttonStyle={{
                    marginTop: 10,
                    marginHorizontal: 10,
                    borderColor: "#e0e0e0",
                    borderWidth: 1.5,
                    borderBottomWidth: 1,
                    ...ConstantStyle.shadow,
                    backgroundColor: Colors.white,
                    borderRadius: 10,
                    //paddingHorizontal: 15,
                    marginBottom: 2,
                    width: "95%",
                    height: 45,
                  }}
                  buttonTextStyle={{
                    textAlign: "left",
                    fontSize: 14,
                  }}
                  data={object_customer}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    setCustomerSelect(selectedItem);
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item;
                  }}
                />
              </View>
              <Text
                style={{
                  ...Fonts.Grey14Bold,
                  marginHorizontal: 15,
                  marginTop: 10,
                  marginBottom: 10,
                }}
              >
                {t("Birth Date")}
              </Text>
              <Pressable
                onPress={() => {
                  setShow(true);
                }}
                style={{ marginHorizontal: 5 }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    width: "95%",
                    margin: 10,
                    marginTop: 5,
                    marginBottom: 5,
                    // alignItems: "center",
                    // justifyContent: "center",
                    // textAlign: "center",
                    borderRadius: 10,
                    borderColor: "#e0e0e0",
                    borderBottomWidth: 0,
                    ...ConstantStyle.shadow,
                    backgroundColor: Colors.white,
                    borderRadius: 10,
                    paddingHorizontal: 15,
                    width: "95%",
                    height: 45,
                    borderWidth: 1.5,
                    paddingVertical: 12,
                    paddingHorizontal: 10,
                  }}
                >
                  <Feather
                    name="calendar"
                    size={20}
                    color={Colors.grey}
                    style={{ marginRight: 15 }}
                  />
                  <Text
                    style={{
                      color: date === "" ? Colors.grey : Colors.black,
                      fontSize: 14,
                      //fontFamily: "Roboto-Regular",
                    }}
                  >
                    {date === "" ? "Date of birth" : date}
                  </Text>
                </View>
              </Pressable>
              {show && (
                <DateTimePicker
                  style={{ marginRight: 30, marginTop: 5 }}
                  value={new Date()}
                  onChange={onDateChange}
                />
              )}

              <Text
                style={{
                  ...Fonts.Grey14Bold,
                  marginHorizontal: 15,
                  marginTop: 10,
                  marginButton: 10,
                }}
              >
                {t("Birth Place")}
              </Text>
              <Input
                placeholder={t("Birth Place")}
                containerStyle={{
                  marginTop: 8,
                  marginHorizontal: 6,
                  width: "97%",
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
                  width: "100%",
                  height: 45,
                }}
                inputStyle={{ ...Fonts.Black14Medium }}
                secureTextEntry={false}
                onChangeText={onChangeField("birth_place")}
              />

              <Text
                style={{
                  ...Fonts.Grey14Bold,
                  marginHorizontal: 15,
                  marginTop: 2,
                  marginBottom: -10,
                }}
              >
                {t("Gender")}
              </Text>
              <View>
                <SelectDropdown
                  placeholder={t("Fiscal Code")}
                  buttonStyle={{
                    marginTop: 20,
                    marginBottom: 20,
                    marginHorizontal: 10,
                    borderColor: "#e0e0e0",
                    borderWidth: 1.5,
                    borderBottomWidth: 1,
                    ...ConstantStyle.shadow,
                    backgroundColor: Colors.white,
                    borderRadius: 10,
                    //paddingHorizontal: 15,
                    marginBottom: 2,
                    width: "95%",
                    height: 45,
                  }}
                  buttonTextStyle={{
                    textAlign: "left",
                    fontSize: 14,
                  }}
                  data={gender}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    setGenderSelect(item);
                    return item;
                  }}
                />
              </View>
              <Text
                style={{
                  ...Fonts.Grey14Bold,
                  marginHorizontal: 15,
                  marginTop: 2,
                  marginBottom: -10,
                }}
              >
                {t("Marital status")}
              </Text>
              <View>
                <SelectDropdown
                  buttonStyle={{
                    marginTop: 20,
                    marginHorizontal: 10,
                    borderColor: "#e0e0e0",
                    borderWidth: 1.5,
                    borderBottomWidth: 1,
                    ...ConstantStyle.shadow,
                    backgroundColor: Colors.white,
                    borderRadius: 10,
                    //paddingHorizontal: 15,
                    marginBottom: 2,
                    width: "95%",
                    height: 45,
                  }}
                  buttonTextStyle={{
                    textAlign: "left",
                    fontSize: 14,
                  }}
                  data={maritial_status}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    setMaritialStatusSelect(item);

                    return item;
                  }}
                />
              </View>
              <Text
                style={{
                  ...Fonts.Grey14Bold,
                  marginHorizontal: 15,
                  marginBottom: 10,
                  marginTop: 10,
                }}
              >
                {t("Fiscal Code")}
              </Text>
              <Input
                placeholder={t("Fiscal Code")}
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
                onChangeText={onChangeField("fiscal_code")}
              />

              <View style={{ marginHorizontal: 15, marginVertical: 20 }}>
                <MainButton
                  name={t("Next")}
                  style={{
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 10,
                      height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,
                    elevation: 10,
                  }}
                  onPress={(e) => handlingStep(false, false, false, true)}
                />
                <Button
                  color="#3740FE"
                  title="Back"
                  //disabled={!isValid}
                  //onPress={() => navigation.navigate("OtpScreen")}
                  onPress={(e) => handlingStep(false, true, false, false)}
                />
              </View>
            </>
          ) : (
            <></>
          )}

          {step4 == true ? (
            <>
              <Text style={{ textAlign: "center", fontSize: 20 }}>Step4</Text>

              <Text
                style={{
                  ...Fonts.Grey14Bold,
                  marginHorizontal: 15,
                  marginTop: 2,
                  marginBottom: -10,
                }}
              >
                {t("Educational Qualification")}
              </Text>
              <View>
                <SelectDropdown
                  buttonStyle={{
                    marginTop: 20,
                    marginHorizontal: 10,
                    borderColor: "#e0e0e0",
                    borderWidth: 1.5,
                    borderBottomWidth: 1,
                    ...ConstantStyle.shadow,
                    backgroundColor: Colors.white,
                    borderRadius: 10,
                    //paddingHorizontal: 15,
                    marginBottom: 2,
                    width: "95%",
                    height: 45,
                  }}
                  buttonTextStyle={{
                    textAlign: "left",
                    fontSize: 14,
                  }}
                  data={educational_qualification}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    Seteducational_qualification_select(item);
                    return item;
                  }}
                />
              </View>
              <Text
                style={{
                  ...Fonts.Grey14Bold,
                  marginHorizontal: 15,
                  marginTop: 10,
                }}
              >
                {t("Job")}
              </Text>
              <Input
                placeholder={t("Job")}
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
                defaultValue={job}
                onChangeText={newText => setJob(newText)}
              />

              <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
                {t("Linkedin")}
              </Text>
              <Input
                placeholder={t("Linkedin")}
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
                defaultValue= {linkedin}
                // onChangeText={onChangeField('linkedin')}
                onChangeText={newText => setLinkedin(newText)}
              />
              <View style={{ marginHorizontal: 15, marginVertical: 20 }}>
                <MainButton
                  name={t("sign_up")}
                  onPress={() => navigation.navigate("OtpScreen")}
                />
                <View style={{ marginHorizontal: 15, marginVertical: 20 }}>
                  {/* <MainButton
                    name={t("Submit")}
                    style={{
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 10,
                        height: 5,
                      },
                      shadowOpacity: 0.34,
                      shadowRadius: 6.27,
                      elevation: 10,
                    }}
                    onPress={() => handleSubmit}
                  /> */}

                  <Button title="Submit" onPress={handleSubmit(onSubmit)} />
                </View>
              </View>

              <View style={{ marginHorizontal: 15, marginVertical: 20 }}>
                <Button
                  color="#3740FE"
                  title="Back"
                  //disabled={!isValid}
                  //onPress={() => navigation.navigate("OtpScreen")}
                  onPress={(e) => handlingStep(false, false, true, false)}
                />
              </View>
            </>
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
