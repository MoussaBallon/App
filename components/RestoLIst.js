import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Restos =  ({ Restos, onRestoPress })=> {
    return (
      <ScrollView horizontal showshorizontalScrollIndicator={false} style={styles.scrollContainer}>
        {Restos.map((resto, index) => (
          <TouchableOpacity key={index} onPress={() => onRestoPress(resto.name)}>
            <View style={styles.categoryContainer}>
              <Icon name={resto.icon} size={35} color="#000" style={styles.icon} />
              <Text style={styles.restoText}>{resto.name}</Text>
            </View>
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
      backgroundColor: '#f8f8f8',
      padding: 15,
      borderRadius: 10,
      marginRight: 10,
      borderWidth: 1,
      borderColor: '#ff4040',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column', // Pour avoir l'icône au-dessus du texte
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      paddingBottom:10,
    },
    categoryText: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 5, // Espace entre l'icône et le texte
    },
    icon: {
      marginBottom: 5, // Ajuster l'espace autour de l'icône
    },
  });

export default Restos;