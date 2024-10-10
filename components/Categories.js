import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';



const Categories =  ({ categories, onCategoryPress })=> {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
      {categories.map((category, index) => (
        <TouchableOpacity key={index} onPress={() => onCategoryPress(category.name)}>
          <View style={styles.categoryContainer}>
            <Icon name={category.icon} size={35} color="#000" style={styles.icon} />
            <Text style={styles.categoryText}>{category.name}</Text>
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


export default Categories;