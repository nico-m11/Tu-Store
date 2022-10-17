import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Animated,
  StyleSheet,
  TouchableHighlight,
  Image,
} from "react-native";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";
import { Colors } from "../../themes/colors";
import CustomHeader from "../components/CustomHeader";
import { SwipeListView } from "react-native-swipe-list-view";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

export const Notifications = ({ navigation }) => {
  const Today = [
    {
      title: "BTC has a hit $1500 USD!",
      time: "10:55 am",
    },
    {
      title: "You have deposit $200 added in your wallet",
      time: "11:25 am",
    },
    {
      title: "XRP is down 20% in last 10 minutes",
      time: "01:25 pm",
    },
    {
      title: "Bitcoin(BTC) +1.1%($8395) in the last  18 minutes.",
      time: "05:35 pm",
    },
    {
      title: "Invite your friends and Earn the reward 5$. ",
      time: "04:35 am",
    },
  ];
  const Yesterday = [
    {
      title: "BTC has a hit $1500 USD!",
      time: "10:55 am",
    },
    {
      title: "You have deposit $200 added in your wallet",
      time: "11:25 am",
    },
    {
      title: "XRP is down 20% in last 10 minutes",
      time: "01:25 pm",
    },
    {
      title: "Bitcoin(BTC) +1.1%($8395) in the last  18 minutes.",
      time: "05:35 pm",
    },
    {
      title: "Invite your friends and Earn the reward 5$. ",
      time: "04:35 am",
    },
  ];
  const { t, i18n } = useTranslation();
  const [listData, setListData] = useState(
    Today.map((NotificationItem, index) => ({
      key: `${index}`,
      title: NotificationItem.title,
      time: NotificationItem.time,
      image: NotificationItem.image,
    }))
  );

  const [yesterdayData, setYesterdayData] = useState(
    Yesterday.map((NotificationItem, index) => ({
      key: `${index}`,
      title: NotificationItem.title,
      time: NotificationItem.time,
      image: NotificationItem.image,
    }))
  );

  const deleteYesterdayRow = (rowMap, rowKey) => {
    const newData = [...yesterdayData];
    const prevIndex = yesterdayData.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setYesterdayData(newData);
  };

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
        <View
          style={{
            marginHorizontal: 15,
            marginVertical: 10,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <Text style={{ ...Fonts.Black14Medium, textAlign: "left" }}>
              {data.item.title}
            </Text>
            <Text style={{ ...Fonts.Grey12Medium, textAlign: "left" }}>
              {data.item.time}
            </Text>
          </View>
        </View>
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

  const renderYesterdayItem = (data, rowMap) => {
    const rowHeightAnimatedValue = new Animated.Value(60);
    return (
      <VisibleItem
        data={data}
        rowHeightAnimatedValue={rowHeightAnimatedValue}
        removeRow={() => deleteYesterdayRow(rowMap, data.item.key)}
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
      <CustomHeader navigation={navigation} title={t("notifications")} />
      <View
        style={{
          backgroundColor: Colors.white,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          flex: 1,
        }}
      >
        <View style={{ marginTop: 15 }}>
          {listData.length > 0 || yesterdayData.length > 0 ? (
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
              ListHeaderComponent={
                listData.length > 0 ? (
                  <Text
                    style={{
                      ...Fonts.Primary16Medium,
                      marginHorizontal: 15,
                      marginTop: 5,
                    }}
                  >
                    Today
                  </Text>
                ) : null
              }
              ListFooterComponent={
                <View>
                  {yesterdayData.length > 0 ? (
                    <Text
                      style={{
                        ...Fonts.Primary16Medium,
                        marginHorizontal: 15,
                        marginTop: 10,
                      }}
                    >
                      Yesterday
                    </Text>
                  ) : null}
                  <SwipeListView
                    data={yesterdayData}
                    renderItem={renderYesterdayItem}
                    renderHiddenItem={renderHiddenItem}
                    leftOpenValue={75}
                    rightOpenValue={0}
                    disableRightSwipe
                    leftActivationValue={100}
                    rightActivationValue={0}
                    leftActionValue={0}
                    rightActionValue={-500}
                    contentContainerStyle={{ paddingBottom: 20 }}
                  />
                </View>
              }
            />
          ) : (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: "80%",
              }}
            >
              <Ionicons
                name="notifications-off-outline"
                size={40}
                color={Colors.grey}
              />
              <Text style={{ ...Fonts.Grey18Medium }}>
                {t("no_new_notifications")}
              </Text>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  rowFrontVisible: {
    marginHorizontal: 15,
    marginTop: 10,
    backgroundColor: Colors.white,
    marginBottom: 10,
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
