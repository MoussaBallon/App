import { View, Text, StyleSheet } from "react-native";
import React from "react";

const SeparationLine = () => {
  return <View style={styles.sepa}></View>;
};

const styles = StyleSheet.create({
  sepa: {
    width: "100%",
    height: 5,
    backgroundColor: "rgba(128, 128, 128, 0.2)",
  },
});

export default SeparationLine;
