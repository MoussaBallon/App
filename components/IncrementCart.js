import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

const IncrementCart = () => {
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
  );
};

const styles = StyleSheet.create({
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
    fontWeight: "bold",
    fontSize: 25,
  },
});
export default IncrementCart;
