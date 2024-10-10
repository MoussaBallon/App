import { View, Text, StyleSheet, StatusBar,TextInput } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import Search from "../components/search";
import Categories from "../components/Categories";
const HomeSreen = () => {


  const categories = [
    { name: 'Locale', icon: 'pizza-outline',  },
    { name: 'Fast Food', icon: 'fast-food-outline' },
    { name: 'Salade', icon: 'leaf-outline' },
    { name: 'Glasse', icon: 'ice-cream-outline' },
    { name: 'Boissons', icon: 'beer-outline' }
  ];

  const handleCategoryPress = (category) => {
    console.log(`Category pressed: ${category}`);
  };


  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View>
        <Icon  name="person-circle" size={40} color={'black'} />
        <Text style={styles.man}>User Name </Text>
        </View>
        <Icon  name="cog" size={40} color={'black'} style={styles.cog} />
      </View>
      <Search />
      <View style={styles.cat}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>Catégories :</Text>
      <Categories categories={categories} onCategoryPress={handleCategoryPress} />
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1/4,
    backgroundColor:'#ff4040',
  },
  head:{
    position:'absolute',
    top: 50,
    left: 20,
    right: 10,
    padding: 9,
    flexDirection: 'row',
    paddingBottom: 10,
  },
  cog:{
    position: 'relative',
    left: 200,
  },
  man:{
    position: 'relative',
    right: 20,
  },
  cat:{
    position:'relative',
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
    color: 'red',
  },
});
export default HomeSreen;
