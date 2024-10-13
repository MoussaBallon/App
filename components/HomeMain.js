import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import Icon from "@expo/vector-icons/Ionicons";
import Pub from "../components/Pub";

const restaurantsData = [
  {
    name: "Pizza",
    image: require("../assets/images/pizza.jpg"),
    // description: "Delicious wood-fired",
    location: "Medina Coura",
    distance: "1.2 km",
  },
  {
    name: "burger",
    image: require("../assets/images/images.jpg"),
    // description: "Juicy burgers with a variety of toppings to choose from.",
    location: "Yirimadjo",
    distance: "2.5 km",
  },
  {
    name: "Crepe",
    image: require("../assets/images/crepe.jpeg"),
    // description: "Fresh sushi rolls ",
    location: "Niarela",
    distance: "3.8 km",
  },
  {
    name: "Ice Cream",
    image: require("../assets/images/cream.jpg"),
    // description: "Healthy salads with fresh ",
    location: "Bosola",
    distance: "1.8 km",
  },
];

const height_proportion = "90%";

const HomeMain = () => {
  const [restaurants, setRestaurants] = useState(restaurantsData); // Données initiales
  const [loading, setLoading] = useState(false); // Gérer l'état de chargement

  // Fonction pour simuler le chargement de plus de données
  const loadMoreRestaurants = () => {
    if (!loading) {
      setLoading(true);
      setTimeout(() => {
        const newRestaurants = [
          {
            name: "New Restaurant 1",
            image: require("../assets/images/crepe.jpeg"),
            // description: "New delicious food.",
            location: "Kalaban Coro",
            distance: "2.0 km",
          },
          {
            name: "New Restaurant 2",
            image: require("../assets/images/crepe.jpeg"),
            // description: "Another great place to eat.",
            location: "ACI 2000",
            distance: "1.5 km",
          },
        ];
        setRestaurants([...restaurants, ...newRestaurants]); // Ajouter les nouvelles données
        setLoading(false); // Terminer le chargement
      }, 1000); // Simuler une attente de 1,5 seconde
    }
  };

  // Fonction pour détecter quand on atteint la fin du ScrollView
  const handleScroll = ({ nativeEvent }) => {
    const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;
    const isCloseToBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

    if (isCloseToBottom) {
      loadMoreRestaurants(); // Charger plus de restaurants
    }
  };

  return (
    <ScrollView
      onScroll={handleScroll}
      scrollEventThrottle={16} // Contrôle la fréquence des événements de défilement
      vertical
      showsVerticalScrollIndicator={false}
      style={styles.scrollView}
    >
      <Pub />
      <View style={styles.container}>
        {/* Boucle pour afficher les restaurants 2 par 2 */}
        {restaurants.map((restaurant, index) => (
          // Afficher un restaurant sur deux dans une même ligne
          <View key={index} style={styles.restaurantCard}>
            <Image
              source={require("../assets/images/pizza.jpg")}
              // source={{ uri: restaurant.image }} // Si tu veux charger des images depuis une URL
              style={styles.restaurantImage}
            />
            <View style={styles.restaurantInfo}>
              <Text style={styles.restaurantName}>{restaurant.name}</Text>
              {/* <Text style={styles.restaurantDescription}>
                {restaurant.description}
              </Text> */}
              <Text style={styles.restaurantLocation}>
                Lieu: {restaurant.location}
              </Text>
              <View style={styles.iconRow}>
                <Icon name="walk" size={20} color="#555" />
                <Text style={styles.iconText}>{restaurant.distance}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Indicateur de chargement à la fin */}
      {loading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}

      {/* Espace supplémentaire pour éviter le chevauchement */}
      <View style={styles.footerSpace} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    position: "relative",
    top: 200,
    height: height_proportion,
  },
  container: {
    position: "relative",
    // left: 20,
  },

  footerSpace: {
    height: 350, // Ajuster selon l'espace souhaité
  },
  loaderContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  restaurantCard: {
    width: "96%",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 20,
    // marginRight: "9%",
    minHeight: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginHorizontal: "auto",
  },
  restaurantImage: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 60,
  },
  restaurantInfo: {
    padding: 10,
    justifyContent: "center",
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  restaurantDescription: {
    fontSize: 14,
    color: "#555",
    marginVertical: 5,
  },
  restaurantLocation: {
    fontSize: 12,
    color: "#777",
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconText: {
    marginLeft: 5,
    color: "#555",
  },
});

export default HomeMain;
