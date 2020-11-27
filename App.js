import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import { Provider } from "react-redux";
import store from "./src/redux/store";

import AppNavigator from "./src/navigation/AppNavigator";

const loadFonts = () => {
  return Font.loadAsync({
    Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading startAsync={loadFonts} onFinish={() => setFontLoaded(true)} />
    );
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({});
