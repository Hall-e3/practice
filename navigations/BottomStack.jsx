import React from "react";
import { Profile, Settings, Home } from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Feather } from "@expo/vector-icons";
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

          if (routeName === "home") {
            iconName = focused ? "home" : "home";
          } else if (routeName === "profile") {
            iconName = focused ? "user" : "user";
          } else if (routeName === "settings") {
            iconName = focused ? "cog" : "cog";
          }
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#e91e",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
      })}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="profile" component={Profile} />
      <Tab.Screen name="settings" component={Settings} />
    </Tab.Navigator>
  );
}
