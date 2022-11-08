import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { logo } from "../constants/images";
export default function Profile() {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <View
        style={{
          backgroundColor: "#314456",
          borderRadius: 60,
          height: 120,
          width: 120,
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Image source={logo} style={{ height: 40, width: 40 }} />
      </View>
      <View>
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: 40,
            width: 40,
            backgroundColor: "#e91e",
            borderRadius: 20,
          }}
        >
          <FontAwesome name="edit" color="#fff" size={22} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
