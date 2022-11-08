import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomDrawer } from "../customs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  AppointmentScreen,
  Home,
  MessageScreen,
  Profile,
  Settings,
} from "../screens";
import BottomStack from "./BottomStack";
const Drawer = createDrawerNavigator();
//#E9E5DD
export default function DrawerStack() {
  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        drawerIcon: ({ focused, color, size }) => {
          let iconName;
          let routeName = route.name;
          if (routeName === "Home") {
            iconName = focused ? "home" : "home";
          } else if (routeName === "Profile") {
            iconName = focused ? "user" : "user";
          } else if (routeName === "Messages") {
            iconName = focused ? "comments" : "comments";
          } else if (routeName === "Appointments") {
            iconName = focused ? "calendar" : "calendar";
          } else if (routeName === "Settings") {
            iconName = focused ? "cog" : "cog";
          }
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        // headerShown: false,
        drawerLabelStyle: {
          fontSize: 16,
          fontFamily: "Poppins-Black",
          marginLeft: -18,
          alignItems: "center",
        },
        drawerActiveTintColor: "#e91e",
        drawerInactiveTintColor: "gray",
      })}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={BottomStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Messages"
        component={MessageScreen}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Appointments"
        component={AppointmentScreen}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}
