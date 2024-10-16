import React from "react";
import { View, Text, Image, StyleSheet, Modal } from "react-native";
import { useRoute } from "@react-navigation/native";
import IncrementCart from "../components/IncrementCart";
import { restaurantsData } from "../constants/restaurants"; // Importation des données
import Icon from "react-native-vector-icons/Ionicons";

const DishDetailScreen = () => {
  const route = useRoute();
  const { dish } = route.params; // Récupérer les infos du plat passé via la navigation

  return (
    <View>
      <View>
        <Image source={dish.image} style={styles.image} />
      </View>
      {restaurantsData.map((restaurant, index) => (
        <View style={styles.modalContainer}>
          <View style={styles.IncrementCart}>
            <IncrementCart />
          </View>
          <Text style={styles.name}>{dish.name}</Text>

          <View style={styles.infos}>
            <Text style={styles.location}>
              <Icon name="location" size={30} />
              {restaurant.location}
            </Text>
            <View style={styles.sep}></View>
            <Text style={styles.distance}>
              <Icon name="walk" size={30} color={"black"} />{" "}
              {restaurant.distance}
            </Text>
          </View>
          <Text style={styles.price}>{dish.price}</Text>
          <Text style={styles.description}>{dish.description}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "red",
    // flexDirection: "column",
    // padding: 10,
  },
  modalContainer: {
    // position: "absolute",
    bottom: 0,
    height: 600,
    backgroundColor: "orange",
    padding: 10,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  IncrementCart: {
    position: "relative",
    top: 30,
    marginHorizontal: "auto",
  },
  infos: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  // seperator for ifos
  sep: {
    position: "relative",
    top: 80,
    width: "1%",
    height: 30,
    backgroundColor: "rgba(128, 128, 128, 1)",
  },
  image: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    width: "100%",
    height: 300,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
    color: "black",
    position: "relative",
    top: 40,
    marginHorizontal: "auto",
  },
  location: {
    fontSize: 16,
    marginTop: 8,
    position: "relative",
    top: 80,
    marginHorizontal: "auto",
  },
  description: {
    fontSize: 16,
    marginTop: 8,
    position: "relative",
    top: 80,
    marginHorizontal: "auto",
  },
  price: {
    fontSize: 18,
    color: "red",
    marginTop: 15,
    position: "relative",
    top: 80,
    marginHorizontal: "auto",
  },
  distance: {
    fontSize: 14,
    color: "#555",
    marginTop: 8,
    position: "relative",
    top: 80,
    marginHorizontal: "auto",
  },
});

export default DishDetailScreen;
