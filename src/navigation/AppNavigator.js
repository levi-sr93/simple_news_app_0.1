import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import NewsListScreen from "../screen/NewsListScreen";
import NewsDetailsScreen from "../screen/NewsDetailsScreen";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="NewsList"
          component={NewsListScreen}
          options={{ title: "All news" }}
        />
        <Stack.Screen
          name="NewsDetails"
          component={NewsDetailsScreen}
          options={{ title: "News Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
