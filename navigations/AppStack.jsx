import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens";
const { Navigator, Screen } = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
    </Navigator>
  );
}
