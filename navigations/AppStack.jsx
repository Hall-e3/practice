import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomStack from "./BottomStack";
const { Navigator, Screen } = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="tabs" component={BottomStack} />
    </Navigator>
  );
}
