import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { logo } from "../constants/images";
import { FontAwesome } from "@expo/vector-icons";
export default function CustomDrawer(props) {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <View
        style={{
          paddingVertical: 40,
          backgroundColor: "#314456",
          paddingLeft: 20,
        }}
      >
        <Image
          source={logo}
          style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }}
        />
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.text}>Connect</Text>
          <Text style={[styles.text, { marginLeft: 4 }]}>Here</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.text}>connect@gmail.com</Text>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: "#FFF" }}>
        <DrawerContentScrollView>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </View>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignContent: "center",
          }}
        >
          <FontAwesome name="sign-out" size={22} color="#e91e" />
          <Text style={[styles.text, { color: "#111", marginLeft: 8 }]}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: { color: "#fff", fontSize: 16, fontFamily: "Poppins-Black" },
});
