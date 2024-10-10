import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Tete from "../components/Tete";
import Icon from "react-native-vector-icons/Ionicons";
import RestoLIst from "../components/RestoLIst";

// const restos = [
//   { name: "Locale", icon: "pizza-outline" },
//   { name: "Fast Food", icon: "fast-food-outline" },
//   { name: "Salade", icon: "leaf-outline" },
//   { name: "Glasse", icon: "ice-cream-outline" },
//   { name: "Boissons", icon: "beer-outline" },
// ];

// const handleRestoPress = (resto) => {
//   console.log(`Category pressed: ${resto}`);
// };

const RestaurantSreen = () => {
  return (
    <View>
      <Tete />
      <Icon
        name="restaurant"
        size={80}
        color={"white"}
        style={styles.restologo}
      />
      <RestoLIst />
    </View>
  );
};

const styles = StyleSheet.create({
  restoren: {
    position: "relative",
    flex: 0,
    top: 200,
    left: 20,
    right: 10,
    padding: 9,
    flexDirection: "row",
    // paddingBottom: 10,
  },
  cog: {
    position: "relative",
    top: 10,
    left: 145,
  },
  restologo: {
    position: "relative",
    top: 50,
    left: 160,
  },
  restoi: {
    position: "relative",
    right: 20,
    fontWeight: "bold",
    fontSize: 18,
  },
  fun: {
    position: "relative",
    left: 180,
  },
  man: {
    position: "relative",
    right: 20,
  },
  restolist: {
    position: "relative",
    top: 250,
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
});

export default RestaurantSreen;
