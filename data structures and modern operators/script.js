"use strict";

const restaurant = {
  name: "Africano Familiario",
  location: "No 12 algeria crescent barnawa, kaduna",
  categories: ["Calabar", "Yoruba", "Hausa", "Edo"],
  staterMenu: ["Amala", "Ewedu", "Tuwo", "Banga"],
  mainMenu: ["Jollof", "Swallow", "Fried"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // open 24 hours
      close: 24,
    },
  },

  order: function (staterIndex, mainIndex) {
    return [this.staterMenu[staterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    staterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `order recieved! ${this.staterMenu[staterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `here is your delcious pasta with ${ing1}, ${ing2} and ${ing3}`,
    );
  },
};

//restaurant.orderDelivery({
//  time: "22:30",
//  address: "barnawa 22",
//  mainIndex: 2,
//  staterIndex: 2,
//});

//restaurant.orderDelivery({
//  address: `barnawa, 20`,
//  staterIndex: 1,
//});

//// DESTRUCTURING OBJECTS:

//const { name, openingHours, categories } = restaurant;
//console.log(name, openingHours, categories);

//const {
//  name: restaurantName,
//  openingHours: Hours,
//  categories: tags,
//} = restaurant;
//console.log(restaurantName, Hours, tags);

//// DEFAULT VALUES
//const { menu = [], staterMenu: staters = [] } = restaurant;

//console.log(menu, staters);

//// MUTATING VARIABLES:
//let a = 111;
//let b = 999;
//const obj = { a: 23, b: 7, c: 14 };

//({ a, b } = obj);
//console.log(a, b);

//// NESTED OBJECTS:
//const {
//  fri: { open: o, close: c },
//} = openingHours;
//console.log(o, c);

//const num = [1, 2, 2];
//const a = num[0];
//const b = num[1];
//const c = num[2];

//const [x, y, z] = num;
//console.log(x, y, z);

//let [main, , secondary] = restaurant.categories;
//console.log(main, secondary);

////const temp = main;
////main = secondary;
////secondary = temp;
////console.log(main, secondary);

//[main, secondary] = [secondary, main];
//console.log(main, secondary);

//const [stater, mainCourse] = restaurant.order(2, 0);
//console.log(stater, mainCourse);

//// NESTED DESTRUCTURING:
//const nested = [2, 4, [5, 6]];
////const [i, , j] = nested;
////console.log(i, j);

//const [i, , [j, k]] = nested;
//console.log(i, j, k);

//// DEFAULT VALUES:
//const [p = 1, q, r = 1] = [8, 9];
//console.log(p, q, r);

// THE SPREAD OPERATOR:
//const arr = [7, 8, 9];
//const newArr = [1, 2, ...arr];
//console.log(newArr);

//console.log(...newArr);

//const newMenu = [...restaurant.mainMenu, "stewed"];
//console.log(newMenu);

//// COPY ARRAY:
//const mainMenuCopy = [...restaurant.mainMenu];
//console.log(mainMenuCopy);

//// JOIN TWO ARRAYS OR MORE:
//const menu = [...restaurant.mainMenu, ...restaurant.staterMenu];
//console.log(menu);

//const str = "Patrick";
//const letter = [...str, "", "s."];
//console.log(letter);

//console.log(``);

//const ingredients = [
//  prompt("let's make pasta! Ingredient 1?"),
//  prompt("ingredient 2?"),
//  prompt("ingredient 3"),
//];

//console.log(ingredients);

//restaurant.orderPasta(...ingredients);

// SPREAD OPERATOR WITH OBJECTS:
//
