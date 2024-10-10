import { View, Text, StyleSheet, StatusBar,TextInput, TouchableOpacity } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import Search from "../components/search";
import Restos from "../components/RestoLIst";

const restos = [
  { name: 'Locale', icon: 'pizza-outline',  },
  { name: 'Fast Food', icon: 'fast-food-outline' },
  { name: 'Salade', icon: 'leaf-outline' },
  { name: 'Glasse', icon: 'ice-cream-outline' },
  { name: 'Boissons', icon: 'beer-outline' }
];

const handleRestoPress = (resto) => {
  console.log(`Category pressed: ${resto}`);
};

const RestaurantSreen = () => {
  return (
    
    <View style={styles.container}>
      <View style={styles.head}>
        <View>
        <Icon  name="person-circle" size={40} color={'black'} />
        <Text style={styles.man}>User Name </Text>
        </View>
        <Icon  name="restaurant" size={70} color={'white'} style={styles.resto} />
        <Icon  name="cog" size={40} color={'black'} style={styles.cog} />
      </View>
      <Search />
      <View style={styles.restoren}>
        <View>
          <Text style={styles.restoi}>Restaurants</Text>
        </View>
        <View>
        <TouchableOpacity>
          <Icon  name="funnel" size={30} color={'black'} style={styles.fun} />
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.restolist}>
      <Restos Restos={restos} onRestoPress={handleRestoPress} />
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

  restoren:{
    position:'absolute',
    top: 200,
    left: 20,
    right: 10,
    padding: 9,
    flexDirection: 'row',
    paddingBottom: 10,
  },
  cog:{
    position: 'relative',
    top:10,
    left: 145,
  },
  resto:{
    position: 'relative',
    left: 50,
  },
  restoi:{
    position:'relative',
    right: 20,
    fontWeight: 'bold',
    fontSize: 18,
  },
  fun:{
    position: 'relative',
    left: 180,
  },
  man:{
    position: 'relative',
    right: 20,
  },
  restolist:{
    position: 'relative',
    top: 250,
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

export default RestaurantSreen;
