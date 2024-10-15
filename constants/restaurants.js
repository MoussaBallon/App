// constants/restaurants.js
export const restaurantsData = [
  {
    name: "Pizza Palace",
    image: require("../assets/images/pizza.jpg"),
    location: "Medina",
    distance: "1.2 km",
    priceRange: "3.000 - 5.000 FCFA",
    dishes: [
      {
        name: "Pizza Margherita",
        image: require("../assets/images/pizza.jpg"),
        description: "Classic pizza with tomato, mozzarella, and basil.",
        price: "3.500 FCFA",
      },
    ],
  },
  {
    name: "Burger House",
    image: require("../assets/images/images.jpg"),
    location: "Yirimadjo",
    distance: "2.5 km",
    priceRange: "3.000 - 6.000 FCFA",
    dishes: [
      {
        name: "Beef Burger",
        image: require("../assets/images/images.jpg"),
        description: "Juicy beef burger with lettuce and cheese.",
        price: "4.000 FCFA",
      },
    ],
  },
  {
    name: "Ice Cream",
    image: require("../assets/images/images.jpg"),
    location: "Yirimadjo",
    distance: "2.5 km",
    priceRange: "3.000 - 6.000 FCFA",
    dishes: [
      {
        name: "Beef Burger",
        image: require("../assets/images/cream.jpg"),
        description: "Juicy beef burger with lettuce and cheese.",
        price: "4.000 FCFA",
      },
    ],
  },
];
