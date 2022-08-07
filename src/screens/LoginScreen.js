import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [text, onChangeText] = React.useState("Enter No.");
  return (
    <View>
      <View alignItems="center">
        <Text>LOGIN</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        keyboardType="number-pad"
        maxLength={10}
      />
      <View alignItems="center" marginTop={10}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CartScreen");
          }}
        >
          <Text>I will do this Later</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "black",
    height: 50,
  },
});
