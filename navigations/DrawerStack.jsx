import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home, Profile, Settings } from "../screens";
import BottomStack from "./BottomStack";
const Drawer = createDrawerNavigator();
//#E9E5DD
export default function DrawerStack() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="tabs" component={BottomStack} />
      <Drawer.Screen name="home" component={BottomStack} />
      <Drawer.Screen name="profile" component={Profile} />
      <Drawer.Screen name="settings" component={Settings} />
    </Drawer.Navigator>
  );
}
