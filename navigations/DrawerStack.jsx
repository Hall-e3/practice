import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomStack from "./BottomStack";
const Drawer = createDrawerNavigator();

export default function DrawerStack() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="tabs" component={BottomStack} />
    </Drawer.Navigator>
  );
}
