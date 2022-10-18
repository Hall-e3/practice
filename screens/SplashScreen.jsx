import { StyleSheet, Image, View } from "react-native";
import React from "react";
import { logo } from "../constants/images";
export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EFE2BA",
  },
  image: { width: 80, height: 80 },
});
