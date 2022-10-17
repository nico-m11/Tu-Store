import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AccountNavigator } from "./AccountNavigator";
import { AppNavigator } from "./AppNavigator";
import { useSelector } from "react-redux";

export const Navigation = () => {
  const userID = useSelector((state) => state.auth.userID);
  return (
    <NavigationContainer>
      {userID != null ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
