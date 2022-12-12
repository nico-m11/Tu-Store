import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";
import { Colors } from "../../themes/colors";
import { Input } from "react-native-elements";
import MainButton from "../components/MainButton";
import { useDispatch } from "react-redux";
import Loader from "../components/Loader";
import { useTranslation } from "react-i18next";
import ForgetScreen from "../components/ForgetScreen";
import EmailVerify from "../components/EmailVerify";
import ResetPassword from "../components/ResetPassword";
import {
  BottomSheetModalProvider,
  BottomSheetModal,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { useForm } from "react-hook-form";
export const LoginScreen = ({ navigation }) => {
  const { height, width } = Dimensions.get("window");
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  const bottomSheetRef = useRef();

  const snapPoints = useMemo(() => ["1%", "40%", "50%"], []);

  const handleSheetChanges = useCallback((index) => {}, []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  // dispatch actions
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  // password show and hide
  const [show, setShow] = useState(false);
  const passwordShow = () => setShow(!show);
  // bottom actionsheet
  // const { isOpen, onOpen, onClose } = useDisclose();
  //loader  
  const [loader, setLoader] = useState(false);
  const handleRegister = () => {
    navigation.navigate("RegisterScreen");
  };
  
  console.log(email)
  console.log(password)

  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = useCallback(() => {
    //POST request
    var raw = JSON.stringify({
      "email":email,
      "password":password
    });


    fetch("https://api.tu-store.soluzionitop.cloud/api/customers/login", {
      method: "POST", //Request Type
      body: raw,//post body
      headers: {
        //Header Defination
        "Content-Type": "application/json",
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
  //render View
  const [rendered, setRendered] = useState();

  const setStatusFilter = (status) => {
    switch (status) {
      case "Forget":
        setRendered(<ForgetScreen onPress={() => setStatusFilter("Email")} />);
        break;
      case "Email":
        setRendered(
          <EmailVerify
            onPress={() => {
              setStatusFilter("Reset");
            }}
          />
        );
        break;
      case "Reset":
        setRendered(
          <ResetPassword
            onPress={() => {
              navigation.navigate("LoginScreen"),
                bottomSheetRef.current?.close(),
                setRendered();
            }}
          />
        );
        break;
    }
  };

  return (
    <SafeAreaView style={{ ...ConstantStyle.container }}>
      <View style={{ flexDirection: isRtl ? "column" : "column-reverse" }}>
        <ImageBackground
          style={{
            width: "auto",
            height: height / 3.5,
            //justifyContent: "flex-center",

            marginTop: 20,
          }}
          source={require("../../../assets/images/header_login.png")}
        ></ImageBackground>
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

      <View
        style={{
          width: width,
          height: height,
          backgroundColor: "white",
          flex: 1,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          marginTop: 30,
        }}
      >
        <ScrollView
          style={{
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        >
          <View style={{ marginVertical: 10, top: 20, buttom: 20 }}>
            <Text
              style={{
                ...Fonts.Black24Bold,
                marginHorizontal: 15,
                marginLeft: 140,
              }}
            >
              {t("welcome")}
            </Text>
            <Text
              style={{
                ...Fonts.Black14Medium,
                marginHorizontal: 15,
                marginLeft: 70,
              }}
            >
              {t("Collegati per consultare i nostri servizi")}
            </Text>
          </View>
          <View style={{ top: 20 }}>
            <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
              {t("email_placeholder")}
            </Text>
            <Input
              placeholder={t("email_label")}
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
              value={email}   
              onChangeText={(value) => {
                setEmail(value);
              }}           
            />
            <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
              {t("password_label")}
            </Text>
            <Input
              placeholder={t("password_label")}
              value={password}
              onChangeText={(value) => {
                setPassword(value);
              }}
              containerStyle={{
                marginTop: 8,
                marginBottom: -18,
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
                  name={show ? "eye" : "eye-off"}
                  style={{ marginLeft: 15 }}
                  color={Colors.grey}
                  size={20}
                  onPress={passwordShow}
                />
              }
              secureTextEntry={show ? false : true}
            />
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={handlePresentModalPress}
            >
              <Text
                style={{
                  ...Fonts.Yellow14Medium,
                  textAlign: "right",
                  marginHorizontal: 15,
                }}
              >
                {t("forget_password")}
              </Text>
            </TouchableOpacity>
            <View style={{ marginHorizontal: 15, marginVertical: 25 }}>
              <MainButton name={t("sign_in")} onPress={onSubmit} />
            </View>
            {/* <Text style={{ ...Fonts.Grey14Bold, textAlign: "center" }}>
              {t("or")}
            </Text> */}
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 25,
                flexDirection: "row",
              }}
            >
              {/* <TouchableOpacity
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
              </TouchableOpacity> */}
              {/* <TouchableOpacity
                activeOpacity={0.7}
                style={{ marginHorizontal: 10 }}
              >
                <Image
                  style={{
                    width: 46,
                    height: 46,
                    resizeMode: "contain",
                    borderRadius: 20,
                  }}
                  alt="goggle"
                  source={require("../../../assets/icons/google.png")}
                />
              </TouchableOpacity> */}
            </View>
          </View>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              alignSelf: "center",
              marginVertical: 25,
            }}
          >
            <Text style={{ ...Fonts.Grey16Medium }}>{t("dont_account")} </Text>
            <TouchableOpacity activeOpacity={0.7} onPress={handleRegister}>
              <Text style={{ ...Fonts.Primary16Medium }}> {t("sign_up")}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          keyboardBehavior="extend"
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,
            elevation: 10,
          }}
        >
          <BottomSheetScrollView>
            {rendered == null ? (
              <ForgetScreen onPress={() => setStatusFilter("Email")} />
            ) : (
              rendered
            )}
          </BottomSheetScrollView>
        </BottomSheetModal>
      </BottomSheetModalProvider>

      <Loader visible={loader} />
    </SafeAreaView>
  );
};
