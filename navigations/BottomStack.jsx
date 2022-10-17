import React from "react";
import { Profile, Settings, Home } from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
//activeColor="#e91e"
export default function BottomStack() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={({ headerShown: false }, ({ route }) => ({
        tabBarIcon:({focused,color,size})=>{
            
        }
      }))}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="profile" component={Profile} />
      <Tab.Screen name="settings" component={Settings} />
    </Tab.Navigator>
  );
}
