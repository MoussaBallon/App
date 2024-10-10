import { View, Text, StyleSheet, StatusBar, TextInput } from "react-native";
import React from "react";
import Categories from "../components/Categories";
import Tete from "../components/Tete";
import { Header } from "react-native/Libraries/NewAppScreen";
import RestoLIst from "../components/RestoLIst";
import HomeMain from "../components/HomeMain";

const HomeSreen = () => {
  const categories = [
    { name: "Locale", icon: "pizza-outline" },
    { name: "Fast Food", icon: "fast-food-outline" },
    { name: "Salade", icon: "leaf-outline" },
    { name: "Glasse", icon: "ice-cream-outline" },
    { name: "Boissons", icon: "beer-outline" },
  ];

  const handleCategoryPress = (category) => {
    console.log(`Category pressed: ${category}`);
  };

  return (
    <View>
      <Tete />
      <View style={styles.cat}>
        <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10 }}>
          Catégories :
        </Text>
        <Categories
          categories={categories}
          onCategoryPress={handleCategoryPress}
        />
      </View>
      <HomeMain />
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    position: "absolute",
    left: 0,
    right: 10,

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
export default HomeSreen;
