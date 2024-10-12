import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
// import { ScrollView } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/Ionicons";

const Categories = ({ categories, onCategoryPress }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollContainer}
    >
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onCategoryPress(category.name)}
        >
          <View style={styles.categoryContainer}>
            <Image source={category.image} style={styles.image} />
          </View>
          <Text style={styles.categoryText}>{category.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 10,
  },
  categoryContainer: {
    // backgroundColor: "#f8f8f8",
    padding: 11,
    borderRadius: 70,
    marginRight: 15,
    // borderWidth: 1,
    // borderColor: "#ff4040",
    backgroundColor: "rgba(128, 128, 128, 0.1)",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column", // Pour avoir l'icône au-dessus du texte
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    paddingBottom: 10,
  },
  categoryText: {
    fontSize: 12,
    // fontWeight: "bold",
    marginTop: 5, // Espace entre l'icône et le texte
    marginHorizontal: 9,
  },
  image: {
    width: 40,
    height: 40,
  },
});

export default Categories;
