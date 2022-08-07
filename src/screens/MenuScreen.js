import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import dish from "../data/dish";
import Fooditem from "../components/Fooditem";
// import Cart from "./Cart";

const MenuScreen = ({ navigation }) => {
  return (
    <View style={styles.menuScreen}>
      <FlatList
        data={dish}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Fooditem info={item} />}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity
        style={styles.cart}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Image
          style={styles.image}
          source={require("../images/baseline_shopping_cart_black_24dp.png")}
        />
        <Text>Go to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuScreen: {
    // borderColor: "red",
    borderWidth: 2,
    height: "100%",
    width: "100%",
    padding: 4,
  },
  cart: {
    // alignItems: "center",
    justifyContent: "center",
    height: 50,
    backgroundColor: "#FFFDD0",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "grey",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    alignItems: "center",
  },
  image: {
    height: 30,
    width: 30,
  },
});

export default MenuScreen;
