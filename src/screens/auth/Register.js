import React, { useState, Component, useEffect } from "react";
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
import { Formik, setFieldValue } from "formik";
import * as yup from "yup";
import { SelectList } from "react-native-dropdown-select-list";
import SearchableDropdown from "react-native-searchable-dropdown";
import DateTimePicker from '@react-native-community/datetimepicker';

export const RegisterScreen = ({ navigation }) => {
  useEffect(() => {
    DataCustomer();
  }, []);

  const { height, width } = Dimensions.get("window");
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState([""]);

  const [customer_type, setCustomer_type] = useState([]);
  const [customerSelect, setCustomerSelect] = useState("");

  const [genderSelect, setGenderSelect] = useState("");

  const [maritialStatusSelect, setMaritialStatusSelect] = useState("");


  console.log(customerSelect);
  console.log(genderSelect);

  const DataCustomer = () => {
    //setLoader(true)
    fetch(
      "https://api.tu-store.soluzionitop.cloud/api/dictionary?column=customer_type",
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRVTzYiLCJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjY5Mjg2OTk4LCJleHAiOjE2NzE5NjUzOTh9.BT-aKLt5R6KTduXXGSFyAQNfQph55h7YyrgZ4pNfOF0",
        },
      }
    )
      .then((res) => {
        //setLoader(false)
        return res.json();
      })
      .then((value) => {
        setCustomer_type(value.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const maritial_status = [
    { id: 1, name: "Nubile/Celibe" }, 
    { id: 2, name: "Sposato/a" },
    { id: 3, name: "Separato/a" },
    { id: 4, name: "Divorziato/a" },
    { id: 5, name: "Vedovo/a" },
  ];

  const gender = [
    { id: 1, name: "M" },
    { id: 2, name: "F" },
  ];

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
        {/* <View className="PannelStep">
          <Text className={step1 == true ? "step active" : "step"}>
            Step <Text className="stepNumber">1</Text>
          </Text>
          <Text className="step-separator">&raquo;</Text>
          <Text className={step2 == true ? "step active" : "step"}>
            Step <Text className="stepNumber">2</Text>
          </Text>
          <Text className="step-separator">&raquo;</Text>
          <Text className={step3 == true ? "step active" : "step"}>
            Step <Text className="stepNumber">3</Text>
          </Text>
          <Text className="step-separator">&raquo;</Text>
          <Text className={step4 == true ? "step active" : "step"}>
            Step <Text className="stepNumber">4</Text>
          </Text>
          <Text className="step-separator">&raquo;</Text>
        </View> */}

        <Formik
          initialValues={{
            name: "",
            lastName: "",
            email: "",
            mobile: "",
            phone: "",
            password: "",
            confirm_password: "",
            country: "",
            region: "",
            province: "",
            city: "",
            zip_code: "",
            address: "",
            date: "",
            birth_place: "",
            fiscal_code: "",
            job: "",
            salary: "",
            skype: "",
            linkedin: "",
            twitter: "",
            facebook: "",
            customer_type: "",
            marital_status: "",
            educational_qualification: "",
          }}
          onSubmit={(values) => Alert.alert(JSON.stringify(values))}
          validationSchema={yup.object().shape({
            name: yup.string().required("Please, provide your name!"),
            lastName: yup
              .string()
              .required('"Please, provide your Last Name!"'),
            mobile: yup
              .number()
              .required("Please, provide your mobile number!"),
            email: yup.string().email().required(),
            password: yup
              .string()
              .min(4)
              .max(10, "Password should not excced 10 chars.")
              .required(),
            // confirm_password: yup.string(),
            // is: (val) => (val && val.length > 0 ? true : false),
            // then: yup
            //   .string()
            //   .oneOf(
            //     [yup.ref("password")],
            //     "Password and Confirm Password didn't match"
            //   ),
          })}
        >
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            touched,
            isValid,
            handleSubmit,
            setFieldValue,
          }) => (
            <View
              style={{
                paddingTop: 20,
              }}
            >
              {step1 == true ? (
                <>
                  <Text style={{ textAlign: "center", fontSize: 20 }}>
                    Step1
                  </Text>
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
                    value={values.name}
                    onChangeText={handleChange("name")}
                    onBlur={() => setFieldTouched("name")}
                  />
                  {touched.name && errors.name && (
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#FF0D10",
                        marginLeft: "5%",
                        marginBottom: 15,
                      }}
                    >
                      {errors.name}
                    </Text>
                  )}

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
                    value={values.lastName}
                    onChangeText={handleChange("lastName")}
                    onBlur={() => setFieldTouched("lastName")}
                  />
                  {touched.lastName && errors.lastName && (
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#FF0D10",
                        marginLeft: "5%",
                        marginBottom: 15,
                      }}
                    >
                      {errors.lastName}
                    </Text>
                  )}

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
                    keyboardType="email-address"
                    secureTextEntry={false}
                    value={values.email}
                    style={{ marginBottom: 20 }}
                    onChangeText={handleChange("email")}
                    onBlur={() => setFieldTouched("email")}
                  />
                  {touched.email && errors.email && (
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#FF0D10",
                        marginLeft: "5%",
                        marginBottom: 15,
                      }}
                    >
                      {errors.email}
                    </Text>
                  )}

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
                    value={values.mobile}
                    style={{ marginBottom: 20 }}
                    onChangeText={handleChange("mobile")}
                    onBlur={() => setFieldTouched("mobile")}
                  />
                  {touched.mobile && errors.mobile && (
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#FF0D10",
                        marginLeft: "5%",
                        marginBottom: 15,
                      }}
                    >
                      {errors.mobile}
                    </Text>
                  )}

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
                    value={values.phone}
                    style={{ marginBottom: 20 }}
                    onChangeText={handleChange("phone")}
                    onBlur={() => setFieldTouched("phone")}
                  />
                  {touched.phone && errors.phone && (
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#FF0D10",
                        marginLeft: "5%",
                        marginBottom: 15,
                      }}
                    >
                      {errors.phone}
                    </Text>
                  )}

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
                        name={
                          values.password === "Password" ? "eye" : "eye-off"
                        }
                        style={{ marginLeft: 15 }}
                        color={Colors.grey}
                        size={20}
                      />
                    }
                    secureTextEntry={
                      values.password === "Password" ? false : true
                    }
                    value={values.password}
                    onChangeText={handleChange("password")}
                    onBlur={() => setFieldTouched("password")}
                  />
                  {touched.password && errors.password && (
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#FF0D10",
                        marginLeft: "5%",
                        marginBottom: 15,
                      }}
                    >
                      {errors.password}
                    </Text>
                  )}
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
                      values.confirm_password === "confirm_password"
                        ? false
                        : true
                    }
                    value={values.confirm_password}
                    onChangeText={handleChange("confirm_password")}
                    onBlur={() => setFieldTouched("confirm_password")}
                  />
                  {touched.confirm_password && errors.confirm_password && (
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#FF0D10",
                        marginLeft: "5%",
                        marginBottom: 15,
                      }}
                    >
                      {errors.confirm_password}
                    </Text>
                  )}
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
                    placeholder={t("Country")}
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
                    value={values.country}
                    onChangeText={handleChange("country")}
                    onBlur={() => setFieldTouched("country")}
                  />
                  {touched.country && errors.country && (
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#FF0D10",
                        marginLeft: "5%",
                        marginBottom: 15,
                      }}
                    >
                      {errors.country}
                    </Text>
                  )}

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
                    value={values.region}
                    onChangeText={handleChange("region")}
                    onBlur={() => setFieldTouched("region")}
                  />
                  {touched.region && errors.region && (
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#FF0D10",
                        marginLeft: "5%",
                        marginBottom: 15,
                      }}
                    >
                      {errors.region}
                    </Text>
                  )}

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
                    value={values.province}
                    onChangeText={handleChange("province")}
                    onBlur={() => setFieldTouched("province")}
                  />
                  {touched.province && errors.province && (
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#FF0D10",
                        marginLeft: "5%",
                        marginBottom: 15,
                      }}
                    >
                      {errors.province}
                    </Text>
                  )}

                  <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
                    {t("City Address")}
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
                    value={values.city}
                    onChangeText={handleChange("city")}
                    onBlur={() => setFieldTouched("city")}
                  />
                  {touched.city && errors.city && (
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#FF0D10",
                        marginLeft: "5%",
                        marginBottom: 15,
                      }}
                    >
                      {errors.city}
                    </Text>
                  )}

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
                    value={values.zip_code}
                    onChangeText={handleChange("zip_code")}
                    onBlur={() => setFieldTouched("zip_code")}
                  />
                  {touched.zip_code && errors.zip_code && (
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#FF0D10",
                        marginLeft: "5%",
                        marginBottom: 15,
                      }}
                    >
                      {errors.zip_code}
                    </Text>
                  )}

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
                    value={values.address}
                    onChangeText={handleChange("address")}
                    onBlur={() => setFieldTouched("address")}
                  />
                  {touched.address && errors.address && (
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#FF0D10",
                        marginLeft: "5%",
                        marginBottom: 15,
                      }}
                    >
                      {errors.address}
                    </Text>
                  )}

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
                  <Text style={{ textAlign: "center", fontSize: 20 }}>
                    Step3
                  </Text>

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
                    <SearchableDropdown
                    style={{
                      margin:10,
                      ...ConstantStyle.shadow,
                      backgroundColor: Colors.white,
                      borderRadius: 10,
                      paddingHorizontal: 15,
                      width: width - 30,
                      height: 45,
                    }}
                      onTextChange={(text) => console.log(text)}
                      //On text change listner on the searchable input
                      onItemSelect={(item) => setCustomerSelect(item.name) && selectedItem(item)}
                      //onItemSelect called after the selection from the dropdown
                      itemStyle={{
                        padding: 5,
                        margin:7,
                        marginTop:5,
                        marginButton:5,
                        backgroundColor: '#fff',
                        borderColor: '#bbb',
                        borderWidth: 0,
                        borderRadius: 5,
                        
                      }}
                      itemTextStyle={{ color: '#fffffff' }}
                      itemsContainerStyle={{ maxHeight: 145
                      }}
                      textInputProps={
                        {
                          placeholder: "customer_type",
                          borderBottomWidth: 0,
                          margin:15,
                          ...ConstantStyle.shadow,
                          backgroundColor: Colors.white,
                          borderRadius: 10,
                          paddingHorizontal: 15,
                          width: width - 30,
                          height: 45,
                          underlineColorAndroid: "transparent",
                          style: {
                              padding: 12,
                              borderWidth: 1,
                              borderColor: '#ccc',
                              borderRadius: 5,
                          },
                          onTextChange: text => alert(text)
                        }
                      }
                      listProps={
                        {
                          nestedScrollEnabled: true,
                        }}
                   
                      inputStyle={{ ...Fonts.Black14Medium }}
                      items={customer_type}
                      //mapping of item array
                      defaultIndex={2}
                      //default selected item index
                      placeholder="placeholder"
                      //place holder for the search input
                      resetValue={false}
                      //reset textInput Value with true and false state
                      underlineColorAndroid="transparent"
                      //To remove the underline from the android input
                      
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
                    style={{ marginHorizontal:5}}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        width: "95%",
                        margin: 10,
                        marginTop:5,
                        marginBottom:5,
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
                          fontFamily: "Roboto-Regular",
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
                      marginHorizontal:6,
                      width:"97%",
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
                    value={values.birth_place}
                    onChangeText={handleChange("birth_place")}
                    onBlur={() => setFieldTouched("birth_place")}
                  />
                  {touched.birth_place && errors.birth_place && (
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#FF0D10",
                        marginLeft: "5%",
                        marginBottom: 15,
                      }}
                    >
                      {errors.birth_place}
                    </Text>
                  )}

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
                    <SearchableDropdown
                    style={{
                      margin:10,
                      ...ConstantStyle.shadow,
                      backgroundColor: Colors.white,
                      borderRadius: 10,
                      paddingHorizontal: 15,
                      width: width - 30,
                      height: 45,
                    }}
                      onTextChange={(text) => console.log(text)}
                      //On text change listner on the searchable input
                      onItemSelect={(item) => setGenderSelect(item.name) && selectedItem(item)}
                      //onItemSelect called after the selection from the dropdown
                      itemStyle={{
                        padding: 5,
                        margin:7,
                        marginTop:5,
                        marginButton:5,
                        backgroundColor: '#fff',
                        borderColor: '#bbb',
                        borderWidth: 0,
                        borderRadius: 5,
                        
                      }}
                      itemTextStyle={{ color: '#fffffff' }}
                      itemsContainerStyle={{ maxHeight: 145
                      }}
                      textInputProps={
                        {
                          placeholder: "gender",
                          borderBottomWidth: 0,
                          margin:15,
                          ...ConstantStyle.shadow,
                          backgroundColor: Colors.white,
                          borderRadius: 10,
                          paddingHorizontal: 15,
                          width: width - 30,
                          height: 45,
                          underlineColorAndroid: "transparent",
                          style: {
                              padding: 12,
                              borderWidth: 1,
                              borderColor: '#ccc',
                              borderRadius: 5,
                          },
                          onTextChange: text => alert(text)
                        }
                      }
                      listProps={
                        {
                          nestedScrollEnabled: true,
                        }}
                   
                      inputStyle={{ ...Fonts.Black14Medium }}
                      items={gender}
                      //mapping of item array
                      defaultIndex={2}
                      //default selected item index
                      placeholder="placeholder"
                      //place holder for the search input
                      resetValue={false}
                      //reset textInput Value with true and false state
                      underlineColorAndroid="transparent"
                      //To remove the underline from the android input
                      
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
                    <SearchableDropdown
                    style={{
                      margin:10,
                      ...ConstantStyle.shadow,
                      backgroundColor: Colors.white,
                      borderRadius: 10,
                      paddingHorizontal: 15,
                      width: width - 30,
                      height: 45,
                    }}
                      onTextChange={(text) => console.log(text)}
                      //On text change listner on the searchable input
                      onItemSelect={(item) => setMaritialStatusSelect(item.name) && selectedItem(item)}
                      //onItemSelect called after the selection from the dropdown
                      itemStyle={{
                        padding: 5,
                        margin:7,
                        marginTop:5,
                        marginButton:5,
                        backgroundColor: '#fff',
                        borderColor: '#bbb',
                        borderWidth: 0,
                        borderRadius: 5,
                        
                      }}
                      itemTextStyle={{ color: '#fffffff' }}
                      itemsContainerStyle={{ maxHeight: 145
                      }}
                      textInputProps={
                        {
                          placeholder: "marital_status",
                          borderBottomWidth: 0,
                          margin:15,
                          ...ConstantStyle.shadow,
                          backgroundColor: Colors.white,
                          borderRadius: 10,
                          paddingHorizontal: 15,
                          width: width - 30,
                          height: 45,
                          underlineColorAndroid: "transparent",
                          style: {
                              padding: 12,
                              borderWidth: 1,
                              borderColor: '#ccc',
                              borderRadius: 5,
                          },
                          onTextChange: text => alert(text)
                        }
                      }
                      listProps={
                        {
                          nestedScrollEnabled: true,
                        }}
                   
                      inputStyle={{ ...Fonts.Black14Medium }}
                      items={maritial_status}
                      //mapping of item array
                      defaultIndex={2}
                      //default selected item index
                      placeholder="placeholder"
                      //place holder for the search input
                      resetValue={false}
                      //reset textInput Value with true and false state
                      underlineColorAndroid="transparent"
                      //To remove the underline from the android input
                      
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
                    value={values.fiscal_code}
                    onChangeText={handleChange("fiscal_code")}
                    onBlur={() => setFieldTouched("fiscal_code")}
                  />
                  {touched.fiscal_code && errors.fiscal_code && (
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#FF0D10",
                        marginLeft: "5%",
                        marginBottom: 15,
                      }}
                    >
                      {errors.fiscal_code}
                    </Text>
                  )}

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
                  <Text style={{ textAlign: "center", fontSize: 20 }}>
                    Step4
                  </Text>

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
                    <SearchableDropdown
                    style={{
                      margin:10,
                      ...ConstantStyle.shadow,
                      backgroundColor: Colors.white,
                      borderRadius: 10,
                      paddingHorizontal: 15,
                      width: width - 30,
                      height: 45,
                    }}
                      onTextChange={(text) => console.log(text)}
                      //On text change listner on the searchable input
                      onItemSelect={(item) => setGenderSelect(item.name) && selectedItem(item)}
                      //onItemSelect called after the selection from the dropdown
                      itemStyle={{
                        padding: 5,
                        margin:7,
                        marginTop:5,
                        marginButton:5,
                        backgroundColor: '#fff',
                        borderColor: '#bbb',
                        borderWidth: 0,
                        borderRadius: 5,
                        
                      }}
                      itemTextStyle={{ color: '#fffffff' }}
                      itemsContainerStyle={{ maxHeight: 145
                      }}
                      textInputProps={
                        {
                          placeholder: "educational_qualification",
                          borderBottomWidth: 0,
                          margin:15,
                          ...ConstantStyle.shadow,
                          backgroundColor: Colors.white,
                          borderRadius: 10,
                          paddingHorizontal: 15,
                          width: width - 30,
                          height: 45,
                          underlineColorAndroid: "transparent",
                          style: {
                              padding: 12,
                              borderWidth: 1,
                              borderColor: '#ccc',
                              borderRadius: 5,
                          },
                          onTextChange: text => alert(text)
                        }
                      }
                      listProps={
                        {
                          nestedScrollEnabled: true,
                        }}
                   
                      inputStyle={{ ...Fonts.Black14Medium }}
                      items={gender}
                      //mapping of item array
                      defaultIndex={2}
                      //default selected item index
                      placeholder="placeholder"
                      //place holder for the search input
                      resetValue={false}
                      //reset textInput Value with true and false state
                      underlineColorAndroid="transparent"
                      //To remove the underline from the android input
                      
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
                    value={values.job}
                    onChangeText={handleChange("job")}
                    onBlur={() => setFieldTouched("job")}
                  />
                  {touched.job && errors.job && (
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#FF0D10",
                        marginLeft: "5%",
                        marginBottom: 15,
                      }}
                    >
                      {errors.job}
                    </Text>
                  )}

                  <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
                    {t("Salary")}
                  </Text>
                  <Input
                    placeholder={t("Salary")}
                    keyboardType="number-pad"
                    maxLength={10}
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
                    value={values.salary}
                    onChangeText={handleChange("salary")}
                    onBlur={() => setFieldTouched("salary")}
                  />
                  {touched.salary && errors.salary && (
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#FF0D10",
                        marginLeft: "5%",
                        marginBottom: 15,
                      }}
                    >
                      {errors.salary}
                    </Text>
                  )}

                  <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
                    {t("Skype")}
                  </Text>
                  <Input
                    placeholder={t("Skype")}
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
                    value={values.skype}
                    onChangeText={handleChange("skype")}
                    onBlur={() => setFieldTouched("skype")}
                  />
                  {touched.skype && errors.skype && (
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#FF0D10",
                        marginLeft: "5%",
                        marginBottom: 15,
                      }}
                    >
                      {errors.skype}
                    </Text>
                  )}

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
                    value={values.linkedin}
                    onChangeText={handleChange("linkedin")}
                    onBlur={() => setFieldTouched("linkedin")}
                  />
                  {touched.linkedin && errors.linkedin && (
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#FF0D10",
                        marginLeft: "5%",
                        marginBottom: 15,
                      }}
                    >
                      {errors.linkedin}
                    </Text>
                  )}

                  <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
                    {t("Twitter")}
                  </Text>
                  <Input
                    placeholder={t("Twitter")}
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
                    value={values.twitter}
                    onChangeText={handleChange("twitter")}
                    onBlur={() => setFieldTouched("twitter")}
                  />
                  {touched.twitter && errors.twitter && (
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#FF0D10",
                        marginLeft: "5%",
                        marginBottom: 15,
                      }}
                    >
                      {errors.twitter}
                    </Text>
                  )}

                  <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
                    {t("Facebook")}
                  </Text>
                  <Input
                    placeholder={t("Facebook")}
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
                    value={values.facebook}
                    onChangeText={handleChange("facebook")}
                    onBlur={() => setFieldTouched("facebook")}
                  />
                  {touched.facebook && errors.facebook && (
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#FF0D10",
                        marginLeft: "5%",
                        marginBottom: 15,
                      }}
                    >
                      {errors.facebook}
                    </Text>
                  )}

                  <View style={{ marginHorizontal: 15, marginVertical: 20 }}>
                    <MainButton
                      name={t("sign_up")}
                      onPress={() => navigation.navigate("OtpScreen")}
                    />
                    <View style={{ marginHorizontal: 15, marginVertical: 20 }}>
                      <MainButton
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
                        onPress={() => handleSubmit()}
                      />
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

              {/* <Text style={{ ...Fonts.Grey14Bold, textAlign: "center" }}>
                {t("or")}
              </Text> 
               <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginVertical: 15,
                  flexDirection: "row",
                }}
              > 
                <TouchableOpacity
              activeOpacity={0.7}
              style={{ marginHorizontal: 10 }}
            >
              <Image
                style={{
                  width: 50,
                  height: 50,
                  resizeMode: "contain",
                  borderRadius: 25,
                }}
                alt="facebook"
                source={require("../../../assets/icons/facebook.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{ marginHorizontal: 10 }}
            >
              <Image
                style={{
                  width: 46,
                  height: 46,
                  resizeMode: "contain",
                  borderRadius: 25,
                }}
                alt="goggle"
                source={require("../../../assets/icons/google.png")}
              />
            </TouchableOpacity> 
              </View> */}
            </View>
          )}
        </Formik>
        {/* <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            alignSelf: "center",
            marginVertical: 15,
          }}
        >
          <Text style={{ ...Fonts.Grey16Medium }}>{t("already_account")}</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Text style={{ ...Fonts.Primary16Medium }}> {t("sign_in")}</Text>
          </TouchableOpacity>
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};
