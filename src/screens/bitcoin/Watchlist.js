import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Animated,
  StyleSheet,
  TouchableHighlight,
  Image,
  TouchableOpacity,
} from "react-native";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";
import { Colors } from "../../themes/colors";
import CustomHeader from "../components/CustomHeader";
import { SwipeListView } from "react-native-swipe-list-view";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

export const WatchList = ({ navigation, route }) => {
  const watchListData = [
    {
      "id": "bitcoin",
      "symbol": "BTC",
      "name": "IMU ",
      "image": "",
      "current_price":" € 45",
      "top_gainers": "CASH €5",
      "market": "+ 4.45%"
  },
  {
    "id": "ethereum",
    "symbol": "ETH",
    "name": "730",
    "image": "",
    "current_price": "$ 50",
    "top_gainers": "cash €7",
    "market": "+ 4.45%"
},
{
  "id": "binancecoin",
  "symbol": "BNB",
  "name": "MUTUI IPOTECARI ",
  "image": "",
  "current_price": "€ 80",
  "top_gainers": "cash €150",
  "market": "+ 4.45%"
},
{
  "id": "tether",
  "symbol": "USDT",
  "name": "Tu-Commerce",
  "image": "",
  "current_price": "$ 1200",
  "top_gainers": "cash €150",
  "market": "+ 4.45%"
},
  
  ];

  const { t, i18n } = useTranslation();
  const [listData, setListData] = useState(
    watchListData.map((WatchlistItem, index) => ({
      key: `${index}`,
      current_price: WatchlistItem.current_price,
      symbol: WatchlistItem.symbol,
      name: WatchlistItem.name,
      image: WatchlistItem.image,
      top_losers: WatchlistItem.top_losers,
      top_gainers: WatchlistItem.top_gainers,
    }))
  );
  const deleteRow = (rowMap, rowKey) => {
    const newData = [...listData];
    const prevIndex = listData.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };
  const VisibleItem = (props) => {
    const { data, rowHeightAnimatedValue, removeRow, rightActionState } = props;

    if (rightActionState) {
      Animated.timing(rowHeightAnimatedValue, {
        toValue: 0,
        duration: -1000,
        useNativeDriver: false,
      }).start(() => {
        removeRow();
      });
    }
    return (
      <TouchableHighlight style={styles.rowFrontVisible}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate("CoinDetails", { item: data.item })
          }
          style={{
            margin: 15,
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
                source={{ uri: data.item.image }}
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
                  {data.item.name}
                </Text>
                <View>
                  <Text style={{ ...Fonts.Black16Medium, textAlign: "right" }}>
                    {data.item.current_price}
                  </Text>
                  {data.item.top_gainers ? (
                    <Text
                      style={{ ...Fonts.Green14Medium, textAlign: "right" }}
                    >
                      {data.item.top_gainers}
                    </Text>
                  ) : null}
                  {data.item.top_losers ? (
                    <Text style={{ ...Fonts.Red14Medium, textAlign: "right" }}>
                      {data.item.top_losers}
                    </Text>
                  ) : null}
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </TouchableHighlight>
    );
  };
  const renderItem = (data, rowMap) => {
    const rowHeightAnimatedValue = new Animated.Value(60);
    return (
      <VisibleItem
        data={data}
        rowHeightAnimatedValue={rowHeightAnimatedValue}
        removeRow={() => deleteRow(rowMap, data.item.key)}
      />
    );
  };
  const HiddenItemWithActions = (props) => {
    const { rowHeightAnimatedValue } = props;
    return (
      <Animated.View
        style={[styles.rowBack, { height: rowHeightAnimatedValue }]}
      ></Animated.View>
    );
  };

  const renderHiddenItem = (data, rowMap) => {
    const rowActionAnimatedValue = new Animated.Value(75);
    const rowHeightAnimatedValue = new Animated.Value(60);

    return (
      <HiddenItemWithActions
        data={data}
        rowMap={rowMap}
        rowActionAnimatedValue={rowActionAnimatedValue}
        rowHeightAnimatedValue={rowHeightAnimatedValue}
      />
    );
  };
  return (
    <SafeAreaView style={{ ...ConstantStyle.container }}>
      <CustomHeader navigation={navigation} title={t("watchlist")} />
      <View
        style={{
          backgroundColor: Colors.white,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          flex: 1,
        }}
      >
        {listData.length > 0 ? (
          <SwipeListView
            data={listData}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            leftOpenValue={75}
            rightOpenValue={0}
            disableRightSwipe
            leftActivationValue={100}
            rightActivationValue={0}
            leftActionValue={0}
            rightActionValue={-400}
            contentContainerStyle={{ paddingBottom: 15 }}
          />
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="checkbox-blank-off-outline"
              size={100}
              color={Colors.grey}
            />
            <Text style={{ ...Fonts.Grey18Medium }}>{t("no_watchlist")}</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  rowFrontVisible: {
    marginHorizontal: 15,
    marginVertical: 10,
    backgroundColor: Colors.white,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: Colors.red,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    margin: 5,
    marginBottom: 15,
    marginHorizontal: 16,
    marginTop: 15,
    borderRadius: 10,
  },
});
