import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import Icon from "@expo/vector-icons/Ionicons"; // Pour utiliser l'icône de flèche

const Filtre = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null); // Pour stocker l'option choisie

  // Fonction pour gérer la sélection d'une option
  const selectOption = (option) => {
    setSelectedOption(option);
    setModalVisible(false); // Fermer le modal après sélection
  };

  // Fonction pour réinitialiser le choix
  const resetFilter = () => {
    setSelectedOption(null);
  };
  return (
    <View style={styles.container}>
      {/* Section de tri */}
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>Trier :</Text>

        {/* Icône de flèche avec texte */}
        <TouchableOpacity
          style={styles.sortButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.sortButtonText}>
            {selectedOption ? selectedOption : "Sélectionner"}
          </Text>
          <Icon name="chevron-down" size={20} color="#000" />
        </TouchableOpacity>

        {/* Si une option est sélectionnée, afficher le choix */}
        {selectedOption && (
          <View style={styles.selectedOptionContainer}>
            <Text style={styles.selectedOptionText}>{selectedOption}</Text>
            {/* Bouton pour réinitialiser */}
            <TouchableOpacity onPress={resetFilter}>
              <Icon name="close-circle" size={20} color="#f00" />
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Modal pour afficher les options */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // Fermer avec le bouton "Retour"
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>

        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Choisir une option de tri</Text>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => selectOption("Populaire")}
          >
            <Text style={styles.optionText}>Populaire</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => selectOption("Plus proche")}
          >
            <Text style={styles.optionText}>Plus proche</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  filterText: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
  },
  sortButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 9,
    backgroundColor: "#ddd",
    borderRadius: 20,
  },
  sortButtonText: {
    marginRight: 5,
    fontSize: 13,
  },
  selectedOptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  selectedOptionText: {
    fontSize: 16,
    color: "#000",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // Arrière-plan semi-transparent
  },
  modalContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  optionButton: {
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
});

export default Filtre;
