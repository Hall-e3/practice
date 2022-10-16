import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
const { Navigator, Screen } = createNativeStackNavigator();
export default function MainStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="auth" component={AuthStack} />
        <Screen name="app" component={AppStack} />
      </Navigator>
    </NavigationContainer>
  );
}
