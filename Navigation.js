// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import HomeScreen from "./screen/HomeSreen";
// import OrderScreen from "./screen/OrderScreen";
// import LoginScreen from "./screen/LoginScreen";
// import SignUpScreen from './screen/SignUpScreen';
// import RestaurantScreen from "./screen/RestaurantSreen";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// const Stack = createNativeStackNavigator();

// const Navigation = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Welcome", headerShown: false }} />
//         <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="Order" component={OrderScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="Restaurant" component={RestaurantScreen} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default Navigation;

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screen/HomeSreen";
import OrderScreen from "./screen/OrderScreen";
import LoginScreen from "./screen/LoginScreen";
import SignUpScreen from './screen/SignUpScreen';
import RestaurantScreen from "./screen/RestaurantSreen";
import TabBar from './components/TabBar';  // Importation de la TabBar
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Écran Login et SignUp */}
        {/* <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} /> */}

        {/* La TabBar englobe les écrans principaux comme Home, Order, Restaurant */}
        <Stack.Screen name="TabBar" component={TabBar} options={{ headerShown: false }} />

        {/* Autres écrans qui ne font pas partie de la TabBar */}
        <Stack.Screen name="Order" component={OrderScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
