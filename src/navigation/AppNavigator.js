import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import { TabBarIOS } from "react-native";

import NewsListScreen from "../screen/NewsListScreen";
import NewsDetailsScreen from "../screen/NewsDetailsScreen";
import FavoritesScreen from "../screen/FavoriteScreen";
import AboutScreen from "../screen/AboutScreen";

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HeaderLeft = () => {
  const navigation = useNavigation();

  return (
    <MaterialIcons
      name="menu"
      size={24}
      onPress={() => {
        navigation.openDrawer();
      }}
    />
  );
};

function HomeNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <HeaderLeft />,
      }}
    >
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
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <HeaderLeft />,
      }}
    >
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
    </Stack.Navigator>
  );
}

function AboutNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <HeaderLeft />,
      }}
    >
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}

function TabsNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home"; //name of icon from RN documentation
          } else if (route.name === "Favorites") {
            iconName = "favorite"; //name of icon from RN documentation
          }

          return <MaterialIcons name={iconName} size={30} />;
        },
      })}
    >
      <Tabs.Screen name="Home" component={HomeNavigator} />
      <Tabs.Screen name="Favorites" component={FavoritesNavigator} />
    </Tabs.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="News" component={TabsNavigator} />
        <Drawer.Screen name="About" component={AboutNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
