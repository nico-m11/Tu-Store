import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Image,
  BackHandler,
  ScrollView,
} from "react-native";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";
import { Colors } from "../../themes/colors";
import {
  Ionicons,
  FontAwesome5,
  Fontisto,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import * as auth from "../../store/action/auth";
import { LinearGradient } from "expo-linear-gradient";
import FeedbackModel from "../components/FeedbackModel";
import SuccessModel from "../components/SuccessModel";
import Loader from "../components/Loader";
import { useTranslation } from "react-i18next";
import ExitModel from "../components/ExitModel";

export const ProfileScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  const { height, width } = Dimensions.get("window");
  //dispatch
  const dispatch = useDispatch();
  //logout model
  const [logoutModel, setLogoutModel] = useState(false);
  //feedback model
  const [feedbackModel, setFeedbackModel] = useState(false);
  //success model
  const [modalVisible, setModalVisible] = useState(false);
  //loader
  const [loader, setLoader] = useState(false);
  const loaderShow = () => {
    setLoader(true);
    setLogoutModel(!logoutModel);
    setTimeout(() => {
      setLoader(false);
      dispatch(auth.logOut());
    }, 2500);
  };

  const [exitModel, setExitModel] = useState(false);
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  const backAction = () => {
    if (navigation.isFocused()) {
      setExitModel(!exitModel);
      return true;
    }
  };

  return (
    <SafeAreaView style={{ ...ConstantStyle.container }}>
      <ImageBackground
        style={{
          width: width,
          height: height / 4.2,
          justifyContent: "flex-start",
        }}
        source={require("../../../assets/images/header.png")}
      >
        <View
          style={{
            flexDirection: "row",
            marginVertical: 50,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flex: 1, marginHorizontal: 15 }}>
            <Text style={{ ...Fonts.White22Bold, textAlign: "left" }}>
              {t("profile")}
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setLogoutModel(true)}
            style={{
              marginHorizontal: 15,
              width: 30,
              height: 30,
              backgroundColor: Colors.white,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="md-power" size={24} color={Colors.red} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View
        style={{
          flex: 1,
        }}
      >
        <LinearGradient
          colors={["#0076DE", "#00D6D6"]}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 1.0 }}
          style={{
            width: 150,
            height: 150,
            borderRadius: 100,
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            top: -75,
            marginBottom: -75,
            ...ConstantStyle.shadow,
          }}
        >
          <Image
            style={{
              width: 147,
              height: 147,
              borderRadius: 100,
            }}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8F8WkjCw3wQ3W1L1BebIbGk-5vUOHFhblQcPXx4ab-AePuFm8mfnE-hckn7ONttU36Q&usqp=CAU",
            }}
          />
        </LinearGradient>
        <View style={{ marginVertical: 5 }}>
          <Text style={{ ...Fonts.Black18Bold, textAlign: "center" }}>
            Johan villiam
          </Text>
          <Text style={{ ...Fonts.Grey14Bold, textAlign: "center" }}>
            +91 8834567897
          </Text>
        </View>
        <ScrollView
          style={{ marginVertical: 15 }}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("EditProfile")}
            style={{ flexDirection: "row", alignItems: "center" }}
            activeOpacity={0.6}
          >
            <FontAwesome5
              name="user-plus"
              size={19}
              color="black"
              style={{ marginHorizontal: 20 }}
            />
            <Text style={{ ...Fonts.Black16Bold }}>{t("edit_profile")}</Text>
          </TouchableOpacity>
          <View
            style={{
              width: width,
              height: 1,
              backgroundColor: Colors.lightgrey,
              marginVertical: 15,
            }}
          ></View>
          <TouchableOpacity
            onPress={() => navigation.navigate("WatchList")}
            style={{ flexDirection: "row", alignItems: "center" }}
            activeOpacity={0.6}
          >
            <FontAwesome
              name="star"
              size={25}
              color="black"
              style={{ marginHorizontal: 20 }}
            />
            <Text style={{ ...Fonts.Black16Bold }}>{t("watchlist")}</Text>
          </TouchableOpacity>
          <View
            style={{
              width: width,
              height: 1,
              backgroundColor: Colors.lightgrey,
              marginVertical: 15,
            }}
          ></View>
          <TouchableOpacity
            onPress={() => navigation.navigate("BankDetails")}
            style={{ flexDirection: "row", alignItems: "center" }}
            activeOpacity={0.6}
          >
            <FontAwesome
              name="bank"
              size={22}
              color="black"
              style={{ marginHorizontal: 20 }}
            />
            <Text style={{ ...Fonts.Black16Bold }}>{t("bank_details")}</Text>
          </TouchableOpacity>
          <View
            style={{
              width: width,
              height: 1,
              backgroundColor: Colors.lightgrey,
              marginVertical: 15,
            }}
          ></View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Privacy")}
            style={{ flexDirection: "row", alignItems: "center" }}
            activeOpacity={0.6}
          >
            <MaterialIcons
              name="lock"
              size={25}
              color="black"
              style={{ marginHorizontal: 20 }}
            />
            <Text style={{ ...Fonts.Black16Bold }}>{t("privacy")}</Text>
          </TouchableOpacity>
          <View
            style={{
              width: width,
              height: 1,
              backgroundColor: Colors.lightgrey,
              marginVertical: 15,
            }}
          ></View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Help")}
            style={{ flexDirection: "row", alignItems: "center" }}
            activeOpacity={0.6}
          >
            <FontAwesome5
              name="headset"
              size={25}
              color="black"
              style={{ marginHorizontal: 20 }}
            />
            <Text style={{ ...Fonts.Black16Bold }}>{t("help")}</Text>
          </TouchableOpacity>
          <View
            style={{
              width: width,
              height: 1,
              backgroundColor: Colors.lightgrey,
              marginVertical: 15,
            }}
          ></View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Language")}
            style={{ flexDirection: "row", alignItems: "center" }}
            activeOpacity={0.6}
          >
            <MaterialIcons
              name="language"
              size={25}
              color="black"
              style={{ marginHorizontal: 20 }}
            />
            <Text style={{ ...Fonts.Black16Bold }}>{t("languages")}</Text>
          </TouchableOpacity>
          <View
            style={{
              width: width,
              height: 1,
              backgroundColor: Colors.lightgrey,
              marginVertical: 15,
            }}
          ></View>
          <TouchableOpacity
            onPress={() => navigation.navigate("About")}
            style={{ flexDirection: "row", alignItems: "center" }}
            activeOpacity={0.6}
          >
            <MaterialIcons
              name="info-outline"
              size={25}
              color="black"
              style={{ marginHorizontal: 20 }}
            />
            <Text style={{ ...Fonts.Black16Bold }}>{t("about")}</Text>
          </TouchableOpacity>
          <View
            style={{
              width: width,
              height: 1,
              backgroundColor: Colors.lightgrey,
              marginVertical: 15,
            }}
          ></View>
          <TouchableOpacity
            onPress={() => setFeedbackModel(true)}
            style={{ flexDirection: "row", alignItems: "center" }}
            activeOpacity={0.6}
          >
            <Fontisto
              name="like"
              size={23}
              color="black"
              style={{ marginHorizontal: 20 }}
            />
            <Text style={{ ...Fonts.Black16Bold }}>{t("rate_us")}</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <ExitModel
        onCancel={() => setLogoutModel(!logoutModel)}
        title={t("logout_permission")}
        cancel={t("cancel")}
        btnName={t("logout")}
        btnOnPress={() => loaderShow()}
        visible={logoutModel}
      />
      <ExitModel
        onCancel={() => setExitModel(!exitModel)}
        title={t("exit_Text")}
        cancel={t("cancel")}
        btnName={t("exit")}
        btnOnPress={() => BackHandler.exitApp()}
        visible={exitModel}
      />
      <FeedbackModel
        modalVisible={feedbackModel}
        cancleModel={() => setFeedbackModel(!feedbackModel)}
        onPress={() => {
          setFeedbackModel(!feedbackModel);
          setModalVisible(true);
        }}
      />
      <SuccessModel
        isFeedback={true}
        modalVisible={modalVisible}
        onPress={() => setModalVisible(!modalVisible)}
      />
      <Loader visible={loader} />
    </SafeAreaView>
  );
};
