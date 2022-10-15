import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../screens/Register";
import Login from "../screens/Login";
const { Navigator, Screen } = createNativeStackNavigator();
export default function AuthStack() {
  return (
    <Navigator initialRouteName="login" screenOptions={{ headerShown: false }}>
      <Screen name="register" component={Register} />
      <Screen name="login" component={Login} />
    </Navigator>
  );
}

const styles = StyleSheet.create({});
