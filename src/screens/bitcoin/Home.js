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

export const HomeScreen = ({ navigation }) => {
  // const NewData = [
  //   {
  //     id: 1,
  //     image: Images.news4,
  //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam ipsum, in.",
  //     date: "12-02-2021",
  //   },
  //   {
  //     id: 2,
  //     image: Images.news5,
  //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam ipsum, in.",
  //     date: "12-02-2021",
  //   },
  //   {
  //     id: 3,
  //     image: Images.news6,
  //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam ipsum, in.",
  //     date: "12-02-2021",
  //   },
  //   {
  //     id: 4,
  //     image: Images.news7,
  //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam ipsum, in.",
  //     date: "12-02-2021",
  //   },
  // ];
  const { t, i18n } = useTranslation();
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
      
      {/* <View style={{ height: "40%" }}>
        <ImageBackground
          style={{
            justifyContent: "flex-start",
            flex: 1,
          }}
          source={require("../../../assets/images/header.png")}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              marginTop: StatusBar.currentHeight + 8,
              paddingBottom: 65,
            }}
          >
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.navigate("Notifications")}
              style={{
                alignItems: "flex-end",
                marginHorizontal: 15,
              }}
            >
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: Colors.yellow,
                  borderRadius: 10,
                  position: "absolute",
                  right: "1%",
                }}
              ></View>
              <Ionicons
                name="ios-notifications-outline"
                size={35}
                color="white"
              />
            </TouchableOpacity>
            <View>
              <Text style={{ ...Fonts.White18Bold, textAlign: "center" }}>
                {t("your_portfolio_balance")}
              </Text>
              <Text style={{ ...Fonts.White40Bold, textAlign: "center" }}>
                $ 12724.33
              </Text>
              <Text style={{ ...Fonts.White14Medium, textAlign: "center" }}>
                {"+2,36% " + t("last_24_hour")}
              </Text>
            </View>
            <Text
              style={{
                ...Fonts.White18Medium,
                textAlign: "left",
                marginHorizontal: 15,
                marginVertical: 5,
              }}
            >
              {t("trending")}
            </Text>
          </View>
        </ImageBackground>
      </View> */}
      {/* <View style={{ marginTop: -80 }}>
        <FlatList
          data={CoinData}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 20 }}
          keyExtractor={(item, index) => item.item.id}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              activeOpacity={0.9}
              key={index + ""}
              onPress={() =>
                navigation.navigate("CoinDetails", { item: item.item })
              }
              style={{
                width: 155,
                height: 120,
                backgroundColor: Colors.white,
                borderRadius: 10,
                marginHorizontal: 10,
                paddingVertical: 15,
                ...ConstantStyle.shadow,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={{ uri: item.item.image }}
                  style={{
                    width: 30,
                    height: 30,
                    marginRight: 10,
                    marginHorizontal: 15,
                  }}
                />
                <View style={{ marginRight: 15 }}>
                  <Text style={{ ...Fonts.Black14Bold, textAlign: "left" }}>
                    {item.item.name}
                  </Text>
                  <Text style={{ ...Fonts.Grey12Medium, textAlign: "left" }}>
                    {item.item.symbol}
                  </Text>
                </View>
              </View>
              <View style={{ marginHorizontal: 16, marginVertical: 10 }}>
                <Text style={{ ...Fonts.Black14Bold, textAlign: "left" }}>
                  {item.item.current_price}
                </Text>
                <Text
                  style={{
                    ...Fonts.Grey12Medium,
                    textAlign: "left",
                    lineHeight: 15,
                  }}
                >
                  {item.item.market}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginHorizontal: 15, marginTop:20 }}>
          <Text style={{ ...Fonts.Black16Bold, textAlign: "center" }}>
            {t("what_s_new")}
          </Text>
          {/* <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("Reward")}
          >
            <LinearGradient
              style={{ borderRadius: 10, marginTop: 10 }}
              colors={["#83A4D4", "#B6FBFF"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  height: 145,
                  alignItems: "center",
                  marginHorizontal: 15,
                }}
              >
                <View style={{ flex: 2 }}>
                  <Text style={{ ...Fonts.Green18Bold, textAlign: "left" }}>
                    {t("reward")}
                  </Text>
                  <Text style={{ ...Fonts.Green16Medium, textAlign: "left" }}>
                    {t("reward_text")}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={require("../../../assets/images/cup.png")}
                    style={{
                      width: 178,
                      height: 175,
                    }}
                  />
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity> */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("Tutela")}
          >
            <LinearGradient
              style={{ borderTopRightRadius: 50,borderBottomRightRadius: 50, marginTop: 15, marginBottom: 20 }}
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
                  {/* <Text style={{ ...Fonts.Red18Bold, textAlign: "left" }}>
                    {t("earn_coin")}
                  </Text>
                  <Text style={{ ...Fonts.Red16Medium, textAlign: "left" }}>
                    {t("earn_coin_text")}
                  </Text> */}
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
                {/* <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                 
                </View> */}
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("CrediTu")}
          >
            <LinearGradient
              style={{ borderTopRightRadius: 50,borderBottomRightRadius: 50, marginTop: 15, marginBottom: 20 }}
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
                  {/* <Text style={{ ...Fonts.Red18Bold, textAlign: "left" }}>
                    {t("earn_coin")}
                  </Text>
                  <Text style={{ ...Fonts.Red16Medium, textAlign: "left" }}>
                    {t("earn_coin_text")}
                  </Text> */}
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
                {/* <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                 
                </View> */}
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("ComparaTu")}
          >
            <LinearGradient
              style={{ borderTopRightRadius: 50,borderBottomRightRadius: 50, marginTop: 15, marginBottom: 20 }}
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
                  {/* <Text style={{ ...Fonts.Red18Bold, textAlign: "left" }}>
                    {t("earn_coin")}
                  </Text>
                  <Text style={{ ...Fonts.Red16Medium, textAlign: "left" }}>
                    {t("earn_coin_text")}
                  </Text> */}
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
                {/* <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                 
                </View> */}
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("TuMarket")}
          >
            <LinearGradient
              style={{ borderTopRightRadius: 50,borderBottomRightRadius: 50, marginTop: 15, marginBottom: 20 }}
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
                  {/* <Text style={{ ...Fonts.Red18Bold, textAlign: "left" }}>
                    {t("earn_coin")}
                  </Text>
                  <Text style={{ ...Fonts.Red16Medium, textAlign: "left" }}>
                    {t("earn_coin_text")}
                  </Text> */}
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
                {/* <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                 
                </View> */}
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("PlayGame")}
          >
            <LinearGradient
              style={{ borderTopRightRadius: 50,borderBottomRightRadius: 50, marginTop: 15, marginBottom: 20 }}
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
                  {/* <Text style={{ ...Fonts.Red18Bold, textAlign: "left" }}>
                    {t("earn_coin")}
                  </Text>
                  <Text style={{ ...Fonts.Red16Medium, textAlign: "left" }}>
                    {t("earn_coin_text")}
                  </Text> */}
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
                {/* <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                 
                </View> */}
              </View>
            </LinearGradient>
          </TouchableOpacity>
        
        </View>
        
        {/* <View style={{ marginHorizontal: 15 }}>
          <Text style={{ ...Fonts.Black16Bold, textAlign: "left" }}>
            {t("watchlist")}
          </Text>
        </View>
        <FlatList
          data={CoinData}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 8 }}
          keyExtractor={(item, index) => item.item.id}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              activeOpacity={0.8}
              key={index + ""}
              onPress={() =>
                navigation.navigate("CoinDetails", { item: item.item })
              }
              style={{
                width: 245,
                height: 75,
                backgroundColor: Colors.white,
                borderRadius: 10,
                marginHorizontal: 10,
                padding: 15,
                justifyContent: "center",
                ...ConstantStyle.shadow,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ flex: 1, alignItems: "center" }}>
                  <Image
                    source={{ uri: item.item.image }}
                    style={{ width: 30, height: 30 }}
                  />
                </View>
                <View style={{ flex: 2, alignItems: "flex-start" }}>
                  <Text style={{ ...Fonts.Black14Bold }}>{item.item.name}</Text>
                  <Text style={{ ...Fonts.Grey12Medium }}>
                    {item.item.symbol}
                  </Text>
                </View>
                <View style={{ flex: 2, alignItems: "flex-end" }}>
                  <Text style={{ ...Fonts.Black14Bold }}>
                    {item.item.current_price}
                  </Text>
                  <Text style={{ ...Fonts.Grey12Medium }}>
                    {item.item.market}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
        <View
          style={{
            marginVertical: 10,
            marginHorizontal: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ ...Fonts.Black16Bold, textAlign: "left" }}>
            {t("news")}
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("NewsScreen")}
          >
            <Text style={{ ...Fonts.Primary16Regular }}>{t("see_more")}</Text>
          </TouchableOpacity>
        </View> */}
        {/* <View style={{ marginBottom: 10 }}>
          {NewData.length > 0
            ? NewData.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index + ""}
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate("NewsDetails")}
                    style={{
                      flexDirection: "row",
                      marginHorizontal: 15,
                      marginBottom: 10,
                    }}
                  >
                    <Image
                      style={{
                        flex: 3,
                        height: 80,
                        borderRadius: 10,
                      }}
                      source={item.image}
                    />
                    <View
                      style={{
                        flex: 8,
                        marginLeft: 10,
                      }}
                    >
                      <Text
                        style={{ ...Fonts.Black14Medium, textAlign: "left" }}
                      >
                        {item.text}
                      </Text>
                      <Text
                        style={{ ...Fonts.Grey12Medium, textAlign: "left" }}
                      >
                        {item.date}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })
            : null}
        </View> */}
      </ScrollView>
      <ExitModel
        onCancel={() => setExitModel(!exitModel)}
        title={t("exit_Text")}
        cancel={t("cancel")}
        btnName={t("exit")}
        btnOnPress={() => BackHandler.exitApp()}
        visible={exitModel}
      />
    </SafeAreaView>
  );
};
