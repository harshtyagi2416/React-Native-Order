import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const CartScreen = ({ navigation }) => {
  return (
    <View padding={10}>
      <Text style={styles.address}>Address:</Text>
      <Text> 224,1st Floor,Tagore Park,Delhi:110009</Text>
      <Text style={styles.address}>Payment mode:</Text>
      <TouchableOpacity style={styles.touch1}>
        <Text>UPI</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touch1}>
        <Text>Credit/Debit Card</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touch1}>
        <Text>Cash on delivery</Text>
      </TouchableOpacity>

      <View marginTop={550} padding={10}>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => {
            navigation.navigate("Done");
          }}
        >
          <Text>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  address: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: "700",
  },
  touch: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "100%",
  },
  touch1: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: "100%",
  },
});

export default CartScreen;
