import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Success = () => {
  return (
    <View style={styles.view}>
      <Image
        style={styles.image}
        source={require("../images/icons8-done-64.png")}
      />
      <Text>Order Placed</Text>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  view: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  image: {
    height: 100,
    width: 100,
  },
});
