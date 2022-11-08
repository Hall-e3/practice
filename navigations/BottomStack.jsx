import React from "react";
import { Profile, Settings, Home, PlatForm } from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Feather } from "@expo/vector-icons";
import { Platform, StyleSheet } from "react-native";
const Tab = createBottomTabNavigator();
//activeColor="#e91e"
export default function BottomStack() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let routeName = route.name;

          if (routeName === "Home") {
            iconName = focused ? "home" : "home";
          } else if (routeName === "Search") {
            iconName = focused ? "search" : "search";
          } else if (routeName === "Settings") {
            iconName = focused ? "cog" : "cog";
          }
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#e91e",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          paddingBottom: 10,
          fontSize: 16,
          fontFamily: "Poppins-Black",
        },
        headerShown: false,
        tabBarStyle: {
          padding: 10,
          height: Platform.OS === "android" ? 80 : 100,
          backgroundColor: "#314456",
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  text: { color: "#fff", fontSize: 16, fontFamily: "Poppins-Black" },
});
