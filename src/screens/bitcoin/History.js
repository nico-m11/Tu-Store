import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";
import { Colors } from "../../themes/colors";
import CustomHeader from "../components/CustomHeader";
import MarketData from "../../data/MarketData";
import { useTranslation } from "react-i18next";

export const History = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  return (
    <SafeAreaView style={{ ...ConstantStyle.container }}>
      <CustomHeader
        navigation={navigation}
        title={t("history")}
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
            contentContainerStyle={{ paddingVertical: 5 }}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate("Details", { item: item.item })
                }
                style={{
                  ...ConstantStyle.shadow,
                  backgroundColor: Colors.white,
                  marginHorizontal: 15,
                  marginBottom: 15,
                  padding: 15,
                  borderRadius: 10,
                }}
              >
                <View
                  style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
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
                      <View>
                        <Text
                          style={{ ...Fonts.Black16Medium, textAlign: "left" }}
                        >
                          {item.item.name}
                        </Text>
                        <Text
                          style={{ ...Fonts.Grey14Medium, textAlign: "left" }}
                        >
                          {item.item.Btc}
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            ...Fonts.Primary16Medium,
                            textAlign: "right",
                          }}
                        >
                          {item.item.current_price}
                        </Text>
                        <Text
                          style={{ ...Fonts.Grey14Medium, textAlign: "right" }}
                        >
                          {item.item.date}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
