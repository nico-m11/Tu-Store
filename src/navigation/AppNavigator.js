import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome, Foundation } from "react-native-vector-icons";
import { Colors } from "../themes/colors";
import { HomeScreen } from "../screens/bitcoin/Home";
import { MarketScreen } from "../screens/bitcoin/Market";
import { PortfolioScreen } from "../screens/bitcoin/Portfolio";
import { ProfileScreen } from "../screens/bitcoin/Profile";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NewsScreen } from "../screens/bitcoin/News";
import { NewsDetails } from "../screens/bitcoin/NewsDetails";
import { PlayGame } from "../screens/bitcoin/PlayGame";
import { Reward } from "../screens/bitcoin/Reward";
import { Notifications } from "../screens/bitcoin/Notifications";
import { CoinDetails } from "../screens/bitcoin/CoinDetails";
import { BuyBitcoin } from "../screens/bitcoin/BuyBitcoin";
import { Deposit } from "../screens/bitcoin/Deposit";
import { History } from "../screens/bitcoin/History";
import { EditProfile } from "../screens/bitcoin/EditProfile";
import { WatchList } from "../screens/bitcoin/Watchlist";
import { BankDetails } from "../screens/bitcoin/BankDetails";
import { Privacy } from "../screens/bitcoin/Privacy";
import { Help } from "../screens/bitcoin/Help";
import { About } from "../screens/bitcoin/About";
import { Language } from "../screens/bitcoin/Language";
import { useTranslation } from "react-i18next";

const BottomTabNavigator = createBottomTabNavigator();

export const TabNavigator = () => {
  const { t, i18n } = useTranslation();
  return (
    <BottomTabNavigator.Navigator
      tabBarPosition="bottom"
      screenOptions={({ route }) => ({
        swipeEnabled: false,
        tabBarShowIcon: true,
        tabBarBounces: true,
        tabBarShowLabel: true,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.darkgray,
        tabBarStyle: {
          backgroundColor: Colors.white,
          justifyContent: "space-between",
          borderTopColor: Colors.transparent,
        },
        tabBarIconStyle: {
          width: "100%",
          alignItems: "center",
          marginVertical: 8,
        },
        tabBarIndicatorStyle: {
          backgroundColor: "transparent",
          lineHeight: 25,
        },
        tabBarStyle: {
          height: 60,
        },
        tabBarLabelStyle: {
          fontFamily: "Mulish-Medium",
          fontSize: 12,
          top: -5,
        },
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return <Foundation name="home" color={color} size={26} />;
          } else if (route.name === "Portfolio") {
            return <Foundation name="graph-pie" color={color} size={26} />;
          } else if (route.name === "Market") {
            return (
              <MaterialCommunityIcons
                name="signal-cellular-3"
                color={color}
                size={26}
              />
            );
          } else if (route.name === "Profile") {
            return <FontAwesome name="user" color={color} size={26} />;
          }
        },
      })}
    >
      <BottomTabNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false, tabBarLabel: t("home") }}
      />
      <BottomTabNavigator.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{ headerShown: false, tabBarLabel: t("portfolio") }}
      />
      <BottomTabNavigator.Screen
        name="Market"
        component={MarketScreen}
        options={{ headerShown: false, tabBarLabel: t("market") }}
      />
      <BottomTabNavigator.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false, tabBarLabel: t("profile") }}
      />
    </BottomTabNavigator.Navigator>
  );
};

const AppStackNavigator = createStackNavigator();

export const AppNavigator = () => {
  return (
    <AppStackNavigator.Navigator>
      <AppStackNavigator.Screen
        name="Homes"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <AppStackNavigator.Screen
        name="NewsScreen"
        component={NewsScreen}
        options={{ headerShown: false }}
      />
      <AppStackNavigator.Screen
        name="NewsDetails"
        component={NewsDetails}
        options={{ headerShown: false }}
      />
      <AppStackNavigator.Screen
        name="PlayGame"
        component={PlayGame}
        options={{ headerShown: false }}
      />
      <AppStackNavigator.Screen
        name="Reward"
        component={Reward}
        options={{ headerShown: false }}
      />
      <AppStackNavigator.Screen
        name="Notifications"
        component={Notifications}
        options={{ headerShown: false }}
      />
      <AppStackNavigator.Screen
        name="CoinDetails"
        component={CoinDetails}
        options={{ headerShown: false }}
      />
      <AppStackNavigator.Screen
        name="BuyBitcoin"
        component={BuyBitcoin}
        options={{ headerShown: false }}
      />
      <AppStackNavigator.Screen
        name="Deposit"
        component={Deposit}
        options={{ headerShown: false }}
      />
      <AppStackNavigator.Screen
        name="History"
        component={History}
        options={{ headerShown: false }}
      />
      <AppStackNavigator.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerShown: false }}
      />
      <AppStackNavigator.Screen
        name="WatchList"
        component={WatchList}
        options={{ headerShown: false }}
      />
      <AppStackNavigator.Screen
        name="BankDetails"
        component={BankDetails}
        options={{ headerShown: false }}
      />
      <AppStackNavigator.Screen
        name="Privacy"
        component={Privacy}
        options={{ headerShown: false }}
      />
      <AppStackNavigator.Screen
        name="Help"
        component={Help}
        options={{ headerShown: false }}
      />
      <AppStackNavigator.Screen
        name="About"
        component={About}
        options={{ headerShown: false }}
      />
      <AppStackNavigator.Screen
        name="Language"
        component={Language}
        options={{ headerShown: false }}
      />
    </AppStackNavigator.Navigator>
  );
};