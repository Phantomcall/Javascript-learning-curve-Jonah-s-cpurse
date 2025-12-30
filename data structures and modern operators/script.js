"use strict";

const restaurant = {
  name: "Africano Familiario",
  location: "No 12 algeria crescent barnawa, kaduna",
  cateories: ["Calabar", "Yoruba", "Hausa", "Edo"],
  staterMenu: ["Amala", "Ewedu", "Tuwo", "Banga"],
  mainMenu: ["Jollof", "Swallow", "Fried"],

  order: function (staterIndex, mainIndex) {
    return [this.staterMenu[staterIndex], this.mainMenu[mainIndex]];
  },
};

const num = [1, 2, 2];
const a = num[0];
const b = num[1];
const c = num[2];

const [x, y, z] = num;
console.log(x, y, z);

let [main, , secondary] = restaurant.cateories;
console.log(main, secondary);

//const temp = main;
//main = secondary;
//secondary = temp;
//console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [stater, mainCourse] = restaurant.order(2, 0);
console.log(stater, mainCourse);

const nested = [2, 4, [5, 6]];
//const [i, , j] = nested;
//console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);
