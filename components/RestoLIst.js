import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
// import Icon from "react-native-vector-icons/Ionicons";
import Icon from "@expo/vector-icons/Ionicons";

const restaurantsData = [
  {
    name: "Ryan",
    image: "https://example.com/pizza-palace.jpg",
    description: "Delicious wood-fired pizza with fresh ingredients.",
    location: "Medina Coura",
    distance: "1.2 km",
  },
  {
    name: "Campement",
    image: "https://example.com/burger-world.jpg",
    description: "Juicy burgers with a variety of toppings to choose from.",
    location: "Yirimadjo",
    distance: "2.5 km",
  },
  {
    name: "Adonis",
    image: "https://example.com/sushi-paradise.jpg",
    description: "Fresh sushi rolls and sashimi prepared to perfection.",
    location: "Niarela",
    distance: "3.8 km",
  },
  {
    name: "Ice Cream",
    image: "https://example.com/salad-garden.jpg",
    description: "Healthy salads with fresh vegetables and homemade dressings.",
    location: "Bosola",
    distance: "1.8 km",
  },
];

const height_proportion = "80%";

const RestoLIst = () => {
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
            image: "https://example.com/new-restaurant-1.jpg",
            description: "New delicious food.",
            location: "Kalaban Coro",
            distance: "2.0 km",
          },
          {
            name: "New Restaurant 2",
            image: "https://example.com/new-restaurant-2.jpg",
            description: "Another great place to eat.",
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
      {restaurants.map((restaurant, index) => (
        <View key={index} style={styles.restaurantCard}>
          <Image
            source={require("../assets/images/pizza.jpg")}
            // source={{ uri: restaurant.image }}
            style={styles.restaurantImage}
          />
          <View style={styles.restaurantInfo}>
            <Text style={styles.restaurantName}>{restaurant.name}</Text>
            <Text style={styles.restaurantDescription}>
              {restaurant.description}
            </Text>
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
      {/* Indicateur de chargement à la fin */}
      {loading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
      <View style={styles.footerSpace} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 10,
    position: "relative",
    top: 120,
    height: height_proportion,
    marginBottom: 50,
  },
  footerSpace: {
    height: 300, // ajuster selon la quantité d'espace souhaitée
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  restaurantCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  loaderContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  restaurantImage: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 90,
  },
  restaurantInfo: {
    padding: 10,
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
  restaurantDistance: {
    fontSize: 12,
    color: "#777",
    marginTop: 5,
  },
});

export default RestoLIst;
