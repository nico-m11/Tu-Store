import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  BackHandler,
} from "react-native";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";
import { Colors } from "../../themes/colors";
import CustomHeader from "../components/CustomHeader";
import MarketData from "../../data/MarketData";
import { useTranslation } from "react-i18next";
import ExitModel from "../components/ExitModel";

export const MarketScreen = ({ navigation }) => {
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
      <CustomHeader
        navigation={navigation}
        title={t("market")}
        isMain={true}
        isSearch={true}
      />
      <View
        style={{
          backgroundColor: Colors.white,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          flex: 1,
        }}
      >
        <View style={{ marginTop: 15 }}>
          <FlatList
            data={MarketData}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => item.item.id}
            contentContainerStyle={{ paddingBottom: 5 }}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate("CoinDetails", { item: item.item })
                }
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                  marginHorizontal: 15,
                  marginVertical: 12,
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Image
                    source={{ uri: item.item.image }}
                    style={{ width: 45, height: 45, marginRight: 15 }}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexDirection: "row",
                    }}
                  >
                    <Text style={{ ...Fonts.Black16Medium, textAlign: "left" }}>
                      {item.item.name}
                    </Text>
                    <View>
                      <Text
                        style={{ ...Fonts.Black16Regular, textAlign: "right" }}
                      >
                        {item.item.current_price}
                      </Text>

                      {item.item.top_gainers ? (
                        <Text
                          style={{ ...Fonts.Green14Medium, textAlign: "right" }}
                        >
                          {item.item.top_gainers}
                        </Text>
                      ) : null}
                      {item.item.top_losers ? (
                        <Text
                          style={{ ...Fonts.Red14Medium, textAlign: "right" }}
                        >
                          {item.item.top_losers}
                        </Text>
                      ) : null}
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
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
