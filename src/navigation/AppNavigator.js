import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import NewsListScreen from "../screen/NewsListScreen";
import NewsDetailsScreen from "../screen/NewsDetailsScreen";
import FavoritesScreen from "../screen/FavoriteScreen";
import { TabBarIOS } from "react-native";

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function HomeNavigator() {
  return (
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
  );
}

function FavoritesNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            let iconName;
            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Favorites") {
              iconName = "favorite";
            }

            return <MaterialIcons name={iconName} size={30} />
          },
        })}
      >
        <Tabs.Screen name="Home" component={HomeNavigator} />
        <Tabs.Screen name="Favorites" component={FavoritesNavigator} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
