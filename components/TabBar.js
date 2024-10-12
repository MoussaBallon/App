import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screen/HomeSreen";
import OrderScreen from "../screen/OrderScreen";
import RestaurantScreen from "../screen/RestaurantSreen";
import Icon from "react-native-vector-icons/Ionicons";
import FavorieScreen from "../screen/FavorieScreen";

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          const iconSize = 26; // Taille de l'icône (ajuste la valeur ici)
          if (route.name === "Acceuil") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Panier") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Restaurants") {
            iconName = focused ? "storefront" : "storefront-outline";
          } else if (route.name === "Favories") {
            iconName = focused ? "bookmark" : "bookmark-outline";
          }
          return <Icon name={iconName} size={iconSize} color={color} />;
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          position: "absolute", // Décolle la TabBar
          bottom: 13, // Décale vers le haut
          left: 10, // Décale vers la gauche
          right: 10, // Décale vers la droite
          borderRadius: 35, // Bordures arrondies
          backgroundColor: "rgba(128, 128, 128, 0.9)", // Couleur de fond
          elevation: 10, // Ajoute une ombre
          shadowColor: "#000", // Couleur de l'ombre
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.3,
          shadowRadius: 5,
          paddingBottom: 10,
        },
      })}
    >
      <Tab.Screen
        name="Acceuil"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Panier"
        component={OrderScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Restaurants"
        component={RestaurantScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Favories"
        component={FavorieScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
