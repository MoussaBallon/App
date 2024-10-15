import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const DishDetailScreen = () => {
  const route = useRoute();
  const { dish } = route.params; // Récupérer les infos du plat passé via la navigation

  return (
    <View>
      <View style={styles.container}>
        <Image source={dish.image} style={styles.image} />
      </View>
      <View styles={styles.InfosCont}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.location}>Location: {dish.location}</Text>
        <Text style={styles.price}>Price: {dish.price}</Text>
        <Text style={styles.distance}>Distance: {dish.distance}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "red",
    // padding: 10,
    marginBottom: 20,
  },
  InfosCont: {
    backgroundColor: "red",
  },
  image: {
    width: "100%",
    height: 200,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
  },
  location: {
    fontSize: 16,
    marginTop: 8,
  },
  price: {
    fontSize: 18,
    color: "red",
    marginTop: 8,
  },
  distance: {
    fontSize: 14,
    color: "#555",
    marginTop: 8,
  },
});

export default DishDetailScreen;
