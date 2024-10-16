import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { restaurantsData } from "../constants/restaurants"; // Importation des données
import Icon from "react-native-vector-icons/Ionicons";

const DishDetailScreen = () => {
  const route = useRoute();
  const { dish } = route.params; // Récupérer les infos du plat passé via la navigation
  const [nbr, setNbr] = useState(0);

  const Augmente = () => {
    setNbr((nbr) => nbr + 1);
  };

  const Dininue = () => {
    if (nbr >= 1) {
      setNbr((nbr) => nbr - 1);
    }
  };

  return (
    <View>
      <View>
        <Image source={dish.image} style={styles.image} />
      </View>
      {restaurantsData.map((restaurant, index) => (
        <View style={styles.modalContainer}>
          <View style={styles.IncrementCart}>
            <View style={styles.container}>
              <View style={styles.container1}>
                <TouchableOpacity
                  className="p-1 rounded-full"
                  // style={{ backgroundColor: "green" }}
                >
                  <Icon
                    name="add-outline"
                    size={30}
                    onPress={Augmente}
                    style={styles.icons}
                  />
                </TouchableOpacity>
                <Text className="px-3" style={styles.nbr}>
                  {nbr}
                </Text>
                <TouchableOpacity
                  className="p-1 rounded-full"
                  // style={{ backgroundColor: "green" }}
                >
                  <Icon
                    name="remove-outline"
                    size={30}
                    onPress={Dininue}
                    style={styles.icons}
                  />
                </TouchableOpacity>
              </View>
            </View>
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
          <TouchableOpacity style={styles.button}>
            <Text style={styles.nbr1}>Ajouter au Panier</Text>
          </TouchableOpacity>
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
    color: "black",
    marginTop: 8,
    position: "relative",
    top: 80,
    marginHorizontal: "auto",
  },
  // styles for the autoIcrement button
  container: {
    width: 160,
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 30,
    backgroundColor: "red",
    justifyContent: "center",
  },
  container1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icons: {
    color: "white",
  },
  nbr: {
    color: "white",
    fontWeight: "semi-bold",
    fontSize: 25,
  },
  nbr1: {
    color: "white",
    fontWeight: "semi-bold",
    fontSize: 18,
  },
  // styling the add to card part
  button: {
    backgroundColor: "red", // Ajuste ici la couleur
    padding: 20,
    width: 350,
    borderRadius: 30,
    position: "relative",
    top: 170,
    marginHorizontal: "auto",
    alignItems: "center",
  },
});

export default DishDetailScreen;
