import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  BackHandler,
  StatusBar,
} from "react-native";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";
import { Colors } from "../../themes/colors";
import { Ionicons } from "@expo/vector-icons";
import CoinData from "../../data/CoinData";
import { LinearGradient } from "expo-linear-gradient";
import Images from "../../themes/Images";
import { useTranslation } from "react-i18next";
import ExitModel from "../components/ExitModel";
import CustomHeader from "../components/CustomHeader";
import { CrediTu } from "./CrediTu";
import { Tutela } from "./Tutela";
import { ComparaTu } from "./ComparaTu";
import { TuMarket } from "./TuMarket";
import { AssicuraTu } from "./AssicuraTu";
import Loader from "../components/Loader";

export const HomeScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  const [exitModel, setExitModel] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {}, []);

  // const backAction = () => {
  //   if (navigation.isFocused()) {
  //     setExitModel(!exitModel);
  //     return true;
  //   }
  // };

  return (
    <SafeAreaView style={{ ...ConstantStyle.container }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginHorizontal: 15, marginTop: 20 }}>
          <Text style={{ ...Fonts.Black16Bold, textAlign: "center" }}>
            {t("what_s_new")}
          </Text>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("Tutela")}
          >
            <LinearGradient
              style={{
                borderTopRightRadius: 50,
                borderBottomRightRadius: 50,
                marginTop: 15,
                marginBottom: 20,
              }}
              colors={["#01541e", "#00a839"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  height: 145,
                  marginHorizontal: 15,
                }}
              >
                <View style={{ flex: 2 }}>
                  <Image
                    source={require("../../../assets/images/TuTela.png")}
                    style={{
                      width: 200,
                      height: 100,
                      marginLeft: 80,
                      marginTop: 20,
                    }}
                  />
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("CrediTu")}
          >
            <LinearGradient
              style={{
                borderTopRightRadius: 50,
                borderBottomRightRadius: 50,
                marginTop: 15,
                marginBottom: 20,
              }}
              colors={["#9b7116", "#cda82d"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  height: 145,
                  //alignItems: "left",
                  marginHorizontal: 15,
                }}
              >
                <View style={{ flex: 2 }}>
                  <Image
                    source={require("../../../assets/images/CrediTu.png")}
                    style={{
                      width: 200,
                      height: 100,
                      marginLeft: 80,
                      marginTop: 20,
                    }}
                  />
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("ComparaTu")}
          >
            <LinearGradient
              style={{
                borderTopRightRadius: 50,
                borderBottomRightRadius: 50,
                marginTop: 15,
                marginBottom: 20,
              }}
              colors={["#ac0f10", "#d8161b"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  height: 145,
                  //  alignItems: "left",
                  marginHorizontal: 15,
                }}
              >
                <View style={{ flex: 2 }}>
                  <Image
                    source={require("../../../assets/images/ComparaTu.png")}
                    style={{
                      width: 200,
                      height: 100,
                      marginLeft: 80,
                      marginTop: 20,
                    }}
                  />
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("TuMarket")}
          >
            <LinearGradient
              style={{
                borderTopRightRadius: 50,
                borderBottomRightRadius: 50,
                marginTop: 15,
                marginBottom: 20,
              }}
              colors={["#5929a5", "#5d29a6"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  height: 145,
                  // alignItems: "left",
                  marginHorizontal: 15,
                }}
              >
                <View style={{ flex: 2 }}>
                  <Image
                    source={require("../../../assets/images/TuMarket.png")}
                    style={{
                      width: 200,
                      height: 100,
                      marginLeft: 80,
                      marginTop: 20,
                    }}
                  />
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("AssicuraTu")}
          >
            <LinearGradient
              style={{
                borderTopRightRadius: 50,
                borderBottomRightRadius: 50,
                marginTop: 15,
                marginBottom: 20,
              }}
              colors={["#1f2d5f", "#294284"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  height: 145,
                  // alignItems: "left",
                  marginHorizontal: 15,
                }}
              >
                <View style={{ flex: 2 }}>
                  <Image
                    source={require("../../../assets/images/AssicuraTu.png")}
                    style={{
                      width: 200,
                      height: 100,
                      marginLeft: 80,
                      marginTop: 20,
                    }}
                  />
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <ExitModel
        onCancel={() => setExitModel(!exitModel)}
        title={t("exit_Text")}
        cancel={t("cancel")}
        btnName={t("exit")}
        btnOnPress={() => BackHandler.exitApp()}
        visible={exitModel}
      />
      <Loader visible={loader} />
    </SafeAreaView>
  );
};
