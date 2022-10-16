import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Register } from "../screens";
const { Navigator, Screen } = createNativeStackNavigator();
export default function AuthStack() {
  return (
    <Navigator initialRouteName="login" screenOptions={{ headerShown: false }}>
      <Screen name="register" component={Register} />
      <Screen name="login" component={Login} />
    </Navigator>
  );
}
