import { View, Text, StyleSheet, StatusBar, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Search from "../components/search";
import React from "react";

const Tete = () => {
  return (
    <View style={styles.head}>
      <View>
        <Icon
          name="person-circle"
          size={40}
          color={"black"}
          style={styles.person}
        />
        <Text style={styles.man}>User Name </Text>
      </View>
      <Icon name="cog" size={40} color={"black"} style={styles.cog} />
      <Search />
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
  head: {
    position: "absolute",
    // top: 50,
    left: 0,
    right: 10,
    // padding: 9,
    height: 200,
    width: 400,
    flexDirection: "row",
    // paddingBottom: 10,
    backgroundColor: "#ff4040",
  },
  cog: {
    position: "relative",
    top: 74,
    left: 245,
  },
  person: {
    position: "relative",
    top: 70,
    left: 30,
  },
  man: {
    position: "relative",
    right: 20,
    top: 70,
    left: 10,
  },
  cat: {
    position: "relative",
    top: 200,
  },
  // bar: {
  //   position:'absolute',
  //   top: 110,
  //   left: 10,
  //   right: 10,
  //   padding: 9,
  //   borderRadius:10,
  //   backgroundColor:'white'
  // },
  red: {
    color: "red",
  },
});

export default Tete;
