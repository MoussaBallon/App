import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const OrderScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      {/* Bouton de retour */}
      <View style={styles.top}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <MaterialIcons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.textO}> Panier </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    position: "absolute",
    height: 100,
    width: "100%",
    backgroundColor: "#FFA510",
  },
  textO: {
    position: "relative",
    top: 60,
    left: 150,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  backButton: {
    position: "absolute",
    top: 60,
    left: 10,
  },
  text: {
    fontSize: 20,
  },
});

export default OrderScreen;
