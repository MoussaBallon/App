import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
// import Icon from "react-native-vector-icons/Ionicons";
import Icon from "@expo/vector-icons/Ionicons";

const restaurants = [
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
  return (
    <ScrollView
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 10,
    position: "relative",
    top: 150,
    height: height_proportion,
    marginBottom: 50,
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
  restaurantImage: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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
