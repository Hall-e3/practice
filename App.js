import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./navigations/AuthStack";
import AppStack from "./navigations/AppStack";
import { SplashScreen } from "./screens";

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  const [isFontsLoaded] = useFonts({
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("./assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
  });
  console.log(isFontsLoaded);
  if (!isFontsLoaded) {
    return (
      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen name="splashscreen" component={SplashScreen} />
        </Navigator>
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="auth" component={AuthStack} />
        <Screen name="app" component={AppStack} />
      </Navigator>
    </NavigationContainer>
  );
}
