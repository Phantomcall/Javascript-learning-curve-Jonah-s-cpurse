"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[2 + 3]]: {
    open: 0, // open 24 hours
    close: 24,
  },
};

//const restaurant = {
//  name: "Africano Familiario",
//  location: "No 12 algeria crescent barnawa, kaduna",
//  categories: ["Calabar", "Yoruba", "Hausa", "Edo"],
//  staterMenu: ["Amala", "Ewedu", "Tuwo", "Banga"],
//  mainMenu: ["Jollof", "Swallow", "Fried"],

//  // ES6 ENHANCED OBJECT LITERALS:
//  openingHours,

//  order(staterIndex, mainIndex) {
//    return [this.staterMenu[staterIndex], this.mainMenu[mainIndex]];
//  },

//  orderDelivery({ staterIndex = 1, mainIndex = 0, time = "20:00", address }) {
//    console.log(
//      `order recieved! ${this.staterMenu[staterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
//    );
//  },

//  orderPasta(ing1, ing2, ing3) {
//    console.log(
//      `here is your delcious pasta with ${ing1}, ${ing2} and ${ing3}`,
//    );
//  },

//  orderEwedu(mainIngredient, ...otherIngredient) {
//    console.log(mainIngredient);
//    console.log(otherIngredient);
//  },
//};

//if (restaurant.openingHours && restaurant.openingHours.mon) {
//  console.log(restaurant.openingHours.mon.open);
//}

// WITH OPTIONAL CHAINING:
//console.log(restaurant.openingHours.mon?.open);
//console.log(restaurant.openingHours?.mon?.open);

//// REAL WORLD EXAMPLE WITH OPTIONAL CHAINING:
//const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

//for (const day of days) {
//  const open = restaurant.openingHours[day]?.open ?? `on ${day} we are closed`;
//  console.log(`On ${day}, we open at ${open}`);
//}

//// OPTIONAL CHAINING FOR METHODS:
//console.log(restaurant.order?.(0, 1) ?? `Method does not exist`);

// OPTIONAL CHAINING FOR ARRAYS:
//const users = [
//  {
//    name: `Patrick`,
//    email: `Pinzypatz@gmail.com`,
//  },
//];

//console.log(users[0]?.name ?? `User array empty`);

// LOOPING OBJECTS: OBJECT KEYS, VALUES AND ENTRIES:

//for (const day of Object.keys(openingHours)) {
//  console.log(day);
//}

// PROPERTY NAMES:
//const properties = Object.keys(openingHours);
//console.log(properties);

//let openStr = `We are open ${properties.length} days a week:`;
//for (const days of properties) {
//  openStr += ` ${days},`;
//}
//console.log(openStr);

//// PROPERTY VALUES:
//const values = Object.values(openingHours);
//console.log(values);

//// ENTIRE OBJECT USING ENTRIES
//const entries = Object.entries(openingHours);
//console.log(entries);

//// KEY, VALUE:
//for (const [keys, { open, close }] of entries) {
//  console.log(`On ${keys} we open at ${open} and close at ${close}`);
//}

//for (const day of Object.keys(openingHours)) {
//  console.log(day);
//}

//restaurant.numGuests = 0;
////const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
////console.log(guests1);

//const guests2 = restaurant.numGuests || 10;
//console.log(guests2);

//const guestCorrect = restaurant.numGuests ?? 10;
//console.log(guestCorrect);

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

// 1.) DESTRUCTURING:

//// SPREAD (RIGHT SIDE OF ASSIGNMENT OPERATOR "=")
//const arr = [1, 2, ...[3, 4]];
//console.log(arr);

//// REST SYNTAX(LEFT HAND SIDE OF THE ASSIGNMENT OPERATOR "=")
//const [a, b, ...others] = [1, 2, 3, 4, 5];
//console.log(a, b, others);

//// (...) on both sides
//const [jollof, , fried, ...otherFoods] = [
//  ...restaurant.mainMenu,
//  ...restaurant.staterMenu,
//];

//console.log(jollof, fried, otherFoods);

//// OBJECTS:
//const { sat, ...weekdays } = restaurant.openingHours;

//console.log(sat, weekdays);

//// 2.) FUNCTIONS:
//const add = function (...numbers) {
//  let sum = 0;
//  for (let i = 0; i < numbers.length; i++) {
//    sum += numbers[i];
//  }
//  console.log(sum);
//};

//add(2, 3);
//add(5, 3, 7, 2);
//add(8, 2, 3, 4, 5, 4, 3, 3, 2);

//const x = [23, 5, 7];
//add(...x);

//restaurant.orderEwedu("mushrooms", "onions", "olives", "spinach");

//restaurant.orderEwedu("mushrooms");

//console.log(`---- OR ----`);
//console.log(3 || "Patrick");
//console.log("" || "patrick");
//console.log(true || 0);
//console.log(undefined || null);

//console.log(undefined || 0 || "" || "hello" || 23 || null);

//console.log(`---- AND ----`);
//console.log(0 && "patrick");
//console.log(7 && "patrick");

//console.log(`hello` && 23 && null && "patrick");

//if (restaurant.orderEwedu) {
//  restaurant.orderEwedu("mushrooms", "spinach");
//}

//restaurant.orderEwedu && restaurant.orderEwedu("mushrooms", "spinach");

//const rest1 = {
//  name: "capri",
//  numGuests: 20,
//};

//const rest2 = {
//  name: "capri",
//  owner: "patrick",
//};

//// OR ASSIGNMENT OPERATOR:
////rest1.numGuests = rest1.numGuests || 10;
////rest2.numGuests = rest2.numGuests || 10;
////rest1.numGuests ||= 10;
////rest2.numGuests ||= 10;

//// NULLISH ASSIGNMENT OPERATOR:
//rest1.numGuests ??= 10;
//rest2.numGuests ??= 10;

////rest1.owner = rest1.owner && "<ANONYMOUS>";
////rest2.owner = rest2.owner && "<ANONYMOUS>";

//rest1.owner &&= "<ANONYMOUS>";
//rest2.owner &&= "<ANONYMOUS>";

//console.log(rest1);
//console.log(rest2);

// LOOPING ARRAYS: THE FOR-OF LOOP:
//const menu = [...restaurant.staterMenu, ...restaurant.mainMenu];

//for (const item of menu) {
//  console.log(item);
//}

//for (const [i, el] of menu.entries()) {
//  console.log(`${i + 1}: ${el}`);
//}

// ENHANCED OBJECT LITERALS:

// SETS:
//const orderSet = new Set([
//  `pasta`,
//  `pizza`,
//  `pizza`,
//  `risotto`,
//  `pasta`,
//  `pizza`,
//]);

//console.log(orderSet);

//// Declaring a new set for a string:
//console.log(new Set(`patrick`));

//// Checking for size of set:
//console.log(orderSet.size);

//// Checking for a particular element in the set:
//console.log(orderSet.has(`pizza`));
//console.log(orderSet.has(`bread`));

//// Adding elements to the set:
//orderSet.add(`Garlic Bread`);
//orderSet.add(`Garlic Bread`);
//console.log(orderSet);

//// Deleting elements from the set:
//orderSet.delete(`risotto`);

//// Deleting all elements in a set:
////orderSet.clear();
////console.log(orderSet);

//// Looping over sets:
//for (const order of orderSet) {
//  console.log(order);
//}

//// Example:

//const staff = [`waiter`, `chef`, `waiter`, `manager`, `chef`, `waiter`];

//const staffUnique = [...new Set(staff)];
//console.log(staffUnique);

//console.log(
//  new Set([`waiter`, `chef`, `waiter`, `manager`, `chef`, `waiter`]).size,
//);

//console.log(new Set(`PatrickAmune`).size);

// NEW OPERATIONS TO MAKE SETS USEFUL:

// 1. INTERSECTION METHOD:
//const italianFoods = new Set([
//  "pasta",
//  "gnocchi",
//  "tomatoes",
//  "olive oil",
//  "garlic",
//  "basil",
//]);

//const mexicanFoods = new Set([
//  "tortillas",
//  "beans",
//  "rice",
//  "tomatoes",
//  "avocado",
//  "garlic",
//]);

//const commonFoods = italianFoods.intersection(mexicanFoods);
//console.log(`Intersection:`, commonFoods);
//console.log([...commonFoods]);

//// 2. UNION METHOD:

//const italianMexicanFusion = italianFoods.union(mexicanFoods);
//console.log(`Union:`, italianMexicanFusion);

//// SECOND UNION METHOD
//console.log([...new Set([...italianFoods, ...mexicanFoods])]);

//// DIFFERENCE METHOD:
//const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
//console.log(`Difference Itailan:`, uniqueItalianFoods);

//const uniqueMexicanFOods = mexicanFoods.difference(italianFoods);
//console.log(`Difference Mexican:`, uniqueMexicanFOods);

//// SYMMETRIC DIFFERENCE:
//const uniqueItalianandMexicanFoods =
//  italianFoods.symmetricDifference(mexicanFoods);
//console.log([...uniqueItalianandMexicanFoods]);

//// IsDisjoinFrom Method:
//console.log(italianFoods.isSubsetOf(mexicanFoods));

// MAPS FUNDAMENTALS:
//const rest = new Map();
//rest.set("name", "Iyawo-Rest");
//rest.set(1, "Kaduna, Nigeria");
////console.log(rest.set(2, "Nairobi, Kenya"));

//rest
//  .set("categories", ["Calabar", "Yoruba", "Hausa", "Edo"])
//  .set("open", 11)
//  .set("close", 23)
//  .set(true, `we are open`)
//  .set(false, `we are closed`);

////console.log(rest.get("name"));
////console.log(rest.get(true));

////const time = 21;
////console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

////// HAS METHOD:
////console.log(rest.has("categories"));

////// DELETE METHOD:
////rest.delete(2);
////console.log(rest);

////// SIZE METHOD:
////console.log(rest.size);

////console.log(rest);
//////console.log(rest.size);

////const arr = [1, 2];
////rest.set(arr, "test");

////rest.set(document.querySelector(`h1`), `Heading`);
////console.log(rest.get(arr));
////console.log(rest);

//// MAPS ITERATION:

//const question = new Map([
//  ["question", `What is the best programming language in the world?`],
//  [1, "C"],
//  [2, "Java"],
//  [3, "Javascript"],
//  ["correct", 3],
//  [true, `Correct🎉`],
//  [false, `Wrong try again`],
//]);

////console.log(question);

////console.log(Object.entries(openingHours));
////const hoursMap = new Map(Object.entries(openingHours));
////console.log(hoursMap);

////console.log(question.get('question'));

//// Quiz App:
//console.log(question.get("question"));
//for (const [key, value] of question) {
//  if (typeof key === "number") {
//    console.log(`Answer ${key}: ${value}`);
//  }
//}

////console.log(question.get("correct"));

//const answer = 3;
//console.log(answer);

//if (answer === question.get("correct")) {
//  console.log(question.get(true));
//} else {
//  console.log(question.get(false));
//}

//console.log(
//  question.get(
//    answer == question.get("correct"),
//  ),
//);

//console.log([...question]);
//console.log(question.entries());
//console.log(question.keys());
//console.log(question.values());

//const game = {
//  team1: "Bayern Munich",
//  team2: "Borrussia Dortmund",
//  players: [
//    [
//      "Neuer",
//      "Pavard",
//      "Martinez",
//      "Alaba",
//      "Davies",
//      "Kimmich",
//      "Goretzka",
//      "Coman",
//      "Muller",
//      "Gnarby",
//      "Lewandowski",
//    ],
//    [
//      "Burki",
//      "Schulz",
//      "Hummels",
//      "Akanji",
//      "Hakimi",
//      "Weigl",
//      "Witsel",
//      "Hazard",
//      "Brandt",
//      "Sancho",
//      "Gotze",
//    ],
//  ],
//  score: "4:0",
//  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//  date: "Nov 9th, 2037",
//  odds: {
//    team1: 1.33,
//    x: 3.25,
//    team2: 6.5,
//  },
//};

//// CREATING AN ARRAY FOR BOTH SETS OF PLAYERS: 1
//const [players1, players2] = game.players;
//console.log(players1, players2);

//// SPECIFYING GK AND OUTFIELD PLAYERS:
//const [Gk, ...fieldPLayers] = players1;
//console.log(Gk, fieldPLayers);

//const [Gk2, ...fieldPLayers2] = players2;
//console.log(Gk2, fieldPLayers2);

//// JOINING ALL PLAYERS ON THE PITCH:
//const allPlayers = [...players1, ...players2];
//console.log(allPlayers);

//// FINAL AMOUNT OF PLAYERS BAYERN USED:
//const bayernPlayersFinal = [...players1, "Thiago", "Coutinho", "Perisic"];
//console.log(bayernPlayersFinal);

//// VARIABLE FOR EACH TEAM BY ODDS:
//const {
//  odds: { team1, x: draw, team2 },
//} = game;
//console.log(team1, draw, team2);

//// FUNCTION FOR PRINTGOALS
//const printGoals = function (...players) {
//  console.log(`${players.length} goals were scored`);
//};
//printGoals("Davies", "Muller", "Lewandoski", "Kimmich");
//printGoals("Davies", "Muller");
//printGoals(...game.scored);

//// TEAM LIKELY TO WIN:
//team1 < team2 && console.log("Team 1 is more likely to win");
//team2 < team1 && console.log("Team 1 is more likely to win");

//// LOOP TO LOG GOAL WITH NAME
//for (const [i, x] of game.scored.entries()) {
//  console.log(`goal ${i + 1}: ${x}`);
//}

//// LOOPING TO GET THE AVERAGE ODDS:
//const entry = Object.values(game.odds);
////console.log(entry);

//let sum = 0;
//for (const x of entry) {
//  sum += x;
//  //console.log(sum);
//}

//const oddAverage = sum / entry.length;
//console.log(oddAverage);

//// FORMAL ODD PRINTOUT:
//for (const [team, odd] of Object.entries(game.odds)) {
//  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
//  console.log(`Odd of ${teamStr} ${odd}`);
//}

//const good = Object.entries(game.odds);
//console.log(good);

//for (const x of Object.values(game.odds)) {
//  console.log(x);
//}

//const gameEvents = new Map([
//  [17, "⚽️ GOAL"],
//  [36, "🔁 Substitution"],
//  [47, "⚽️ GOAL"],
//  [61, "🔁 Substitution"],
//  [64, "🟨 Yellow card"],
//  [69, "🟥 Red card"],
//  [70, "🔁 Substitution"],
//  [72, "🔁 Substitution"],
//  [76, "⚽️ GOAL"],
//  [80, "⚽️ GOAL"],
//  [92, "🟨 Yellow card"],
//]);

//// CREATE AN ARRAY THAT REMOVE DUDPLICATE EVENTS:
//const events = [...new Set(gameEvents.values())];
//console.log(events);

//// REMOVE YELLOW CARD FROM THE GAME:
//gameEvents.delete(64);
//console.log(gameEvents);

//// PRINT OUT A STRING:
//const time = [...gameEvents.keys()].pop()
//console.log(time);

//console.log(
//  `An event happened, on average, every ${time / gameEvents.size} minutes`,
//);

//// loop over events and log them based on halfs
//for (const [time, event] of gameEvents) {
//  if (time <= 45) {
//    console.log(`[FIRST HALF] ${time}: ${event}`);
//  } else if (time >= 45) {
//    console.log(`[SECOND HALF] ${time}: ${event}`);
//  }
//}

//for (const [min, event] of gameEvents) {
//  const half = min <= 45 ? 'FIRST' : 'SECOND'
//  console.log(`[${half} HALF] ${min}: ${event}`);
//}

// WORKING WITH STRINGS PART 1:

const airline = `Air Peace Nigeria`;
const plane = `A320`;

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('e'));
console.log(airline.lastIndexOf('e'));
