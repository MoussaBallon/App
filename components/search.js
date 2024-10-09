import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const Search = () => {
  return (
    <View style={styles.container}>
        <Icon name="search" size={20} color={'black'}/>
      <TextInput placeholder="Resto, Plats" style={styles.inputStyle}/>
      <View style={styles.line}>
      </View>
      <Icon name="location" size={20} color={'black'}/>
      <Text>Mali, Bamako</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        position:'absolute',
        top: 140,
        left: 10,
        right: 10,
        padding: 9,
        flexDirection: 'row',
        borderColor: '#000',
        paddingBottom: 10,
        borderRadius:10,
        backgroundColor:'white',
        shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.6,
          shadowRadius: 5,
          paddingBottom:10,
    },
    inputStyle: {
        flex: 1, 
      },
      line: {
        width: 1, // Épaisseur de la ligne
        height: '100%', // Longueur de la ligne
        backgroundColor: 'black', // Couleur de la ligne
        position: 'absolute',
        left: 200,
        top: 10,
      },

    // red: {
    //   color: 'red',
    // },
  });
export default Search;