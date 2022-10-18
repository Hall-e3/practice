import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import BottomStack from "./BottomStack";
import DrawerStack from "./DrawerStack";
const { Navigator, Screen } = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="drawer" component={DrawerStack} />
      {/* <Screen name="tabs" component={BottomStack} /> */}
    </Navigator>
  );
}
