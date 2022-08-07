import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  Button,
} from "react-native";

const Fooditem = ({ info }) => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.f}>
      <View style={styles.container}>
        <Image style={styles.images} source={info.image} />
        <View style={styles.infor}>
          <Text style={styles.name}>{info.name}</Text>
          <Text style={styles.description}>{info.description}</Text>
          <Text style={styles.price}>{info.price}</Text>
        </View>
      </View>
      <View style={styles.p}>
        <TouchableOpacity
          style={styles.press}
          onPress={() => {
            if (counter <= 5) {
              setCounter(counter + 1);
            }
          }}
        >
          <Text>+</Text>
        </TouchableOpacity>
        <Text style={styles.counter}>{counter}</Text>
        <TouchableOpacity
          style={styles.press}
          onPress={() => {
            if (counter !== 0) {
              setCounter(counter - 1);
            }
          }}
        >
          <Text>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  f: {
    flexDirection: "row",
  },
  p: {
    flexDirection: "column",
    marginBottom: 2,
    marginTop: 1,
  },
  container: {
    borderWidth: 1,
    width: "95%",
    height: 115,
    bordercolor: "grey",
    flexDirection: "row",
    borderRadius: 5,
    marginBottom: 2,
    padding: 6,
  },
  name: {
    fontWeight: "bold",
    fontSize: 15,
    color: "black",
  },
  description: {
    fontSize: 12,
  },
  price: {
    fontSize: 13,
    color: "green",
  },
  images: {
    height: 100,
    width: 100,
    borderRadius: 5,
  },
  infor: {
    margin: 8,
    width: 280,
  },
  press: {
    height: 30,
    width: 17,
    backgroundColor: "yellow",
    paddingVertical: 4,
    bordercolor: "black",
    borderWidth: 1,
    padding: 3,
  },
  counter: {
    marginVertical: 5.5,
    paddingVertical: 8,
    height: 41,
    paddingLeft: 2,
  },
});

export default Fooditem;
