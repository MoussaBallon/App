import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Pub = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View>
          <Text style={styles.txt2}>Promo</Text>
          <Image
            style={styles.man}
            source={require("../assets/images/pub.png")}
          />
        </View>
        <View>
          <Text style={styles.txt}>Obtenez jusqu'a</Text>
          <Text style={styles.txt}>60% reduction</Text>
          <Text style={styles.txt}>en invitant</Text>
          <Text style={styles.txt}>un ami</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E9967A",
    width: "95%",
    marginHorizontal: "auto",
    minHeight: 80,
    borderRadius: 16,
    marginVertical: 20,
  },
  container2: {
    flexDirection: "row",
    // justifyContent: "space-between",
  },
  man: {
    width: 110,
    height: 100,
    position: "relative",
    left: 250,
    top: -25,
  },
  //   text de pub
  txt: {
    color: "white",
    fontWeight: "bold",
    padding: 1,
  },
  txt2: {
    position: "relative",
    top: 40,
    left: 30,
    fontSize: 20,
    color: "red",
    fontWeight: "bold",
    // alignItems: "center",
  },
});

export default Pub;
