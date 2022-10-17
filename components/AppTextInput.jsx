
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const { width } = Dimensions.get("screen");
export default function AppTextInput(props) {
  return (
    <View
      style={{
        marginVertical: 14,
        marginHorizontal: 20,
      }}
    >
      <Text style={{ marginBottom: 8 }}>{props.label}</Text>
      <View
        style={{
          borderColor: "gray",
          borderWidth: 1,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          paddingVertical: 18,
          borderRadius: 10,
        }}
      >
        {props.leftIcon === "user-o" ? (
          <FontAwesome
            name={props.leftIcon}
            color="#05375a"
            size={props.size}
          />
        ) : (
          <Feather
            name={props.leftIcon}
            color={props.color}
            size={props.size}
          />
        )}
        <TextInput
          placeholder={props.placeholder}
          style={{
            marginLeft: 10,
            marginRight: 16,
            flex: 1,
            width: width / 1.1,
          }}
          secureTextEntry={props.secureTextEntry || false}
          value={props.value}
          autoCapitalize="none"
        />

        <>
          {props.rightIcon === "eye-off || eye" ? (
            <TouchableOpacity onPress={props.onPress}>
              <Feather
                name={props.rightIcon}
                color={props.color}
                size={props.size}
              />
            </TouchableOpacity>
          ) : (
            <Feather
              name={props.rightIcon}
              color={props.color}
              size={props.size}
            />
          )}
        </>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
