import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AppTextInput from "../components/AppTextInput";
import { logo } from "../constants/images";
const { width } = Dimensions.get("screen");
export default function Login({ navigation }) {
  const [data, setData] = React.useState({
    email: "",
    password: "",
    secureTextEntry: true,
    check_textInputChange: false,
  });

  console.log(data);
  const textInputChange = (text) => {
    if (text.length !== 0) {
      setData({
        ...data,
        email: text,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: text,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (text) => {
    setData({
      ...data,
      password: text,
    });
  };

  const toggleSecureTextEntry = () => {
    console.log("pressed");
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          source={logo}
          style={{ width: 80, height: 80, marginVertical: 6 }}
        />
        <Text>Sign in to connect</Text>
      </View>
      <View>
        <AppTextInput
          label="Email"
          placeholder="enter email"
          leftIcon="user-o"
          size={20}
          onChangeText={(text) => textInputChange(text)}
          check_textInputChange={data.check_textInputChange}
          rightIcon="check-circle"
          color="green"
        />
        <AppTextInput
          label="Password"
          placeholder="enter password"
          secureTextEntry={data.secureTextEntry ? true : false}
          onChangeText={(text) => handlePasswordChange(text)}
          leftIcon="lock"
          size={20}
          rightIcon={data.secureTextEntry ? "eye-off" : "eye"}
          onPress={toggleSecureTextEntry}
        />

        <View
          style={{
            backgroundColor: "#D79922",
            paddingVertical: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginHorizontal: 20,
            borderRadius: 10,
            marginTop: 20,
            width: width / 1.1,
          }}
        >
          <TouchableOpacity onPress={() => console.log("it's pressed")}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ flexDirection: "row", marginHorizontal: 20, marginTop: 15 }}
        >
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("register")}>
            <Text style={{ marginLeft: 4, color: "#6495ed" }}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    backgroundColor: "#EFE2BA",
  },
});
