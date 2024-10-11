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
import Categories from "../components/Categories";

const categories = [
  { name: "Locale", image: require("../assets/images/rice.png") },
  { name: "Fast Food", image: require("../assets/images/burgur.png") },
  { name: "Salade", image: require("../assets/images/Salade.png") },
  { name: "Glasse", image: require("../assets/images/Ice.png") },
  { name: "Boissons", image: require("../assets/images/drink.png") },
];

const handleCategoryPress = (resto) => {
  console.log(`Category pressed: ${resto}`);
};

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
      <View style={styles.barcat}>
        <Categories
          categories={categories}
          onCategoryPress={handleCategoryPress}
        />
      </View>
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
  barcat: {
    position: "relative",
    top: 120,
  },
  // restolist: {
  //   position: "relative",
  //   top: 250,
  // },
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
