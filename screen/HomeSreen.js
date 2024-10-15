import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Icon from "@expo/vector-icons/Ionicons";
import Pub from "../components/Pub";
import { useNavigation } from "@react-navigation/native";
import Categories from "../components/Categories";
import Tete from "../components/Tete";
import { Header } from "react-native/Libraries/NewAppScreen";
import { restaurantsData } from "../constants/restaurants"; // Importation des données
import SeparationLine from "../components/SeparationLine";
import Filtre from "../components/Filtre";

const height_proportion = "90%";

const HomeSreen = () => {
  const categories = [
    { name: "Locale", image: require("../assets/images/rice.png") },
    { name: "Fast Food", image: require("../assets/images/burgur.png") },
    { name: "Salade", image: require("../assets/images/Salade.png") },
    { name: "Glasse", image: require("../assets/images/Ice.png") },
    { name: "Boissons", image: require("../assets/images/drink.png") },
  ];

  const handleCategoryPress = (category) => {
    console.log(`Category pressed: ${category}`);
  };

  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  // Fonction pour simuler le chargement de plus de plats
  const loadMoreDishes = () => {
    if (!loading) {
      setLoading(true);

      setTimeout(() => {
        // Parcourir les restaurants pour récupérer leurs plats
        const newDishes = restaurantsData
          .map((restaurant) => restaurant.dishes) // Récupérer les plats
          .flat() // Aplatir les plats pour obtenir une liste unique de plats
          .slice(dishes.length, dishes.length + 4); // Charger par lots de 4

        if (newDishes.length > 0) {
          setDishes([...dishes, ...newDishes]); // Ajouter les nouveaux plats chargés
        }

        setLoading(false); // Fin du chargement
      }, 1000); // Simuler une attente de 1 seconde
    }
  };

  const handleScroll = ({ nativeEvent }) => {
    const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;
    const isCloseToBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

    if (isCloseToBottom) {
      loadMoreDishes(); // Charger plus de plats
    }
  };

  return (
    <View>
      <Tete />
      <View style={styles.cat}>
        <Categories
          categories={categories}
          onCategoryPress={handleCategoryPress}
        />
        <SeparationLine style={styles.sep} />
        <Filtre />
        <SeparationLine style={styles.sep} />
      </View>

      {/* <HomeMain /> */}

      <ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16} // Contrôle la fréquence des événements de défilement
        vertical
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <Pub />

        {restaurantsData.map((restaurant, index) => (
          <View key={index} style={styles.restaurantCard}>
            <Text style={styles.restoName}>{restaurant.name}</Text>
            {restaurant.dishes.map((dish, dishIndex) => (
              <TouchableOpacity
                key={dishIndex}
                onPress={() =>
                  navigation.navigate("DishDetailScreen", { dish })
                }
              >
                <Image source={dish.image} style={styles.DishesImg} />
                <View style={styles.restaurantInfos}>
                  <View>
                    <Text style={styles.dishName}>{dish.name}</Text>
                    <Text> Lieu: {restaurant.location}</Text>
                    <View style={styles.iconRow}>
                      <Icon name="walk" size={20} color="#555" />
                      <Text style={styles.iconText}>{restaurant.distance}</Text>
                    </View>
                  </View>
                  <Text style={{ color: "red" }}>{dish.price}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
        {/* Afficher un indicateur de chargement si loading est vrai */}
        {loading && (
          <View style={{ paddingVertical: 20 }}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
        {/* Espace supplémentaire pour éviter le chevauchement */}
        <View style={styles.footerSpace} />
      </ScrollView>
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
  // pub custom
  pub: {
    paddingVertical: 10,
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
  scrollView: {
    position: "relative",
    top: 200,
    height: height_proportion,
  },
  footerSpace: {
    height: 350, // Ajuster selon l'espace souhaité
  },
  loaderContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  iconRow: {
    flexDirection: "row",
  },
  restaurantCard: {
    width: "96%",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    marginHorizontal: "auto",
  },
  restoName: {
    paddingLeft: 10,
    paddingBottom: 10,
    fontWeight: "bold",
  },

  DishesImg: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 60,
  },
  dishName: {
    marginTopTOp: 10,
    fontWeight: "bold",
  },
  restaurantInfo: {
    padding: 10,
    justifyContent: "center",
  },
  restaurantInfos: {
    // padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default HomeSreen;
