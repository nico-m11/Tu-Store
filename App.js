import "./ignoreWarnings";
import "react-native-gesture-handler";
import React, { useState } from "react";
import { NativeBaseProvider } from "native-base";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Navigation } from "./src/navigation";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import authReducer from "./src/store/reducer/auth";

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer);

const fetchFonts = async () => {
  return await Font.loadAsync({
    "Mulish-Regular": require("./assets/font/Mulish-Regular.ttf"),
    "Mulish-Bold": require("./assets/font/Mulish-Bold.ttf"),
    "Mulish-Medium": require("./assets/font/Mulish-Medium.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
        onError={() => {
          console.log("Font not loaded");
        }}
      />
    );
  }
  const config = {
    dependencies: {
      "linear-gradient": require("expo-linear-gradient").LinearGradient,
    },
  };

  return (
    <Provider store={store}>
      <NativeBaseProvider config={config}>
        <Navigation />
      </NativeBaseProvider>
    </Provider>
  );
}
