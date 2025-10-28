"use strict"; // THE USE OF STRICT MODE
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive`);

//const interface = `Audio`;
//const private = 534;

// FUNCTIONS:
function logger(name1) {
    console.log(`My name is ${name1}`);
}

//calling / running / invoking the function

// prompts can work inside a function but it has to be given a parameter when writing the function
logger(prompt(`What is your name?`));
logger(prompt(`what is your name?`));

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


const num = Number(`23`);

console.log(num);

// funtion to calculate age based on a given birthyear

// FUNCTION DECLARATION
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

// FUNCTION EXPRESSION
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);

console.log(age1, age2);

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

// ARROW FUNCTION

//const calcAge3 = birthYear => 2037 - birthYear;
//const age3 = calcAge3(1991);
//console.log(age3);

// function to calculate how many years are left for retirement:
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, `Jonas`));
console.log(yearsUntilRetirement(1980, `Bob`));

// CALLING A FUNCTION IN ANOTHER FUNCTION

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

// REVIEWING FUNCTIONS

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, `Patrick`));
console.log(yearsUntilRetirement(1950, `Jonas`));

// CHALLENGE #1 FUNCTIONS:
const calcAverage = (score1, score2, score3) => {
  const averageScores = (score1 + score2 + score3) / 3;
  return averageScores;
}

let scoreDolphins = console.log(calcAverage(44, 23, 71));
let scoreKoalas = console.log(calcAverage(65, 54, 49));

function checkWinner(avgDolphins, avgKoalas) {

  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
  } else {
    console.log(`No team wins`);
  }
}


// TRST DATA 1
checkWinner(scoreDolphins, scoreKoalas);

// TEST DATA 2
scoreDolphins = (calcAverage(85, 54, 41));
scoreKoalas = (calcAverage(23, 34, 27));
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);


// ARRAYS
const friends = [`Michael`, `Steven`, `Peter`];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = `James`;
console.log(friends);

const firstName = `Jonas`;
const jonas = [firstName, `Schmedtmann`, 2037 - 1991, `Teacher`, friends];

console.log(jonas);

// ARRAY EXERCISE
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years1 = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);


// ARRAY METHODS:
const friends = [`Michael`, `Steven`, `Peter`];

// ADD ELEMENTS
const newLength = friends.push(`James`);
console.log(friends);
console.log(newLength);

friends.unshift(`Dana`);
console.log(friends);

// REMOVE ELEMENTS
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf(`Steven`));

friends.push(23);
console.log(friends.includes(`Steven`));
console.log(friends.includes(`23`));

if (friends.includes(`Peter`)) {
  console.log(`You have a friend called peter`);
} else {
  console.log(`You have no friedns, loser!!!`);
}

// TASK:

function checker(day) {
  day.toLocaleLowerCase() == "monday"
    ? console.log(`Today is ${day} and todays date is ${date}`)
    : day == "friday"
    ? console.log(`Today is ${day} and todays date is ${date}`)
    : day == "saturday" || day == "sunday"
    ? console.log(`Today is ${day} and todays date is ${date}`)
    : console.log(`It's the week day`);
}

//let time = new Date();
//let date = `${time.getHours()}/${time.getMinutes()}/${time.getSeconds()} ${time.getDate()}/${
//  time.getMonth() + 1
//}/${time.getFullYear()}`;
//let month = "october";
//let day = "friday";

//switch (month.toLocaleLowerCase()) {
//  case "january":
//    checker("monday");
//    break;
//  case "february":
//    checker("monday");
//    break;
//  case "october":
//    checker("friday");
//    break;
//  default:
//    console.log(`Hope you are having a great ${month}`);
//}

//function calcTip(bill) {
//  let tipPercent =
//    bill >= 50 && bill <= 300 ? 15 : bill <= 50 || bill >= 300 ? 20 : null;
//  let tip = (tipPercent / 100) * bill;

//  let finalBill = Number(bill) + Number(tip);

//  if (bill >= 50 && bill <= 300) {
//    console.log(
//      `The bill is $${bill} and the tip is $${tip} so the total bill is $${finalBill}`
//    );
//  } else if (bill <= 50 || bill >= 300) {
//    console.log(
//      `The bill is $${bill} and the tip is $${tip} so the total bill is $${finalBill}`
//    );
//  }
//}

//const bill = [125, 555, 44];

//const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];

//const total = [bill[0] + bill[1] + bill[2]];
//console.log(total);

// OBJECTS
//const jonasArray = [
//  `Jonas`,
//  `Schmedtmann`,
//  2037 - 1991,
//  `Teacher`,
//  [`Michael`, `Peter`, `Steven`],
//];

//const jonas = {
//  firstName: `Jonas`,
//  lastName: `Schmedtmann`,
//  age: 2037 - 1991,
//  job: `Teacher`,
//  friends: [`Michael`, `Peter`, `Steven`],
//};

//console.log(jonas);

//console.log(jonas.lastName);
//console.log(jonas[`lastName`]);

//const namekey = `Name`;
//console.log(jonas[`first` + namekey]);
//console.log(jonas[`last` + namekey]);

//const interestedIn = prompt(
//  `What do you want to KNow about jonas, choose between firstName, lastNmae, age, job and friends`
//);
//console.log(jonas[interestedIn]);

//if (jonas[interestedIn]) {
//  console.log(jonas[interestedIn]);
//} else {
//  console.log(
//    `Not a real value, choose between firstName, lastNmae, age, job and friends`
//  );
//}

//jonas.location = `Portugal`;
//jonas[`twitter`] = `@jonasschmedtmann;`;

//console.log(jonas);

// challenge
// "Jonas has three friends and his best frined is called Michael"

//console.log(
//  `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`
//);
//jonas.firstName +
//  " has " +
//  jonas.friends.length +
//  ` friends` +
//  ` and his best friend is called ` +
//  jonas.friends[0];

const jonas = {
  firstName: `Jonas`,
  lastName: `Schmedtmann`,
  birthYear: 1991,
  job: `Teacher`,
  friends: [`Michael`, `Peter`, `Steven`],
  hasDriversLIcense: true,

  //calcAge: function (birthYear) {
  //  return 2037 - birthYear;
  //}

  //calcAge: function () {
  //  //console.log(this);
  //  return 2037 - this.birthYear;
  //},

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    } and he has ${this.hasDriversLIcense ? "a" : "no"} driver's license.`;
  },
};

console.log(jonas.calcAge());
console.log(jonas.friends);
console.log(jonas.age);

console.log(jonas[`calcAge`](1991));

// Challenge
// "JOnas ia a 46 year old teacher and he has a driver's license"

console.log(
  `${jonas.firstName} is a ${jonas.age} year old ${jonas.job} and he has ${jonas.hasDriversLIcense ? "a" : "no"} driver's license.`
);

console.log(jonas.getSummary());

// Task to calculate and compare the BMI's of two people

const mark = {
  fullName: `Mark Miller`,
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const John = {
  fullName: `John Smith`,
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI();
console.log(mark.bmi);

John.calcBMI();
console.log(John.bmi);

if (mark.bmi > John.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${John.fullName}'s BMI (${John.bmi})`
  );
} else if (John.bmi > mark.bmi) {
  console.log(
    `${John.fullName}'s BMI (${John.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
  );
}
// ITERATION: THE FOR LOOP

for (let rep = 1; rep <= 10; rep++) {
  console.log(`lifting weights repitiion ${rep} 🏋️`);
}

const patrick = [
  `Patrick`,
  `Amune`,
  2037 - 1999,
  `Student`,
  [`Noah`, `Tali`, `Shem`],
  true,
];

const types = [];

for (let i = 0; i < patrick.length; i++) {
  console.log(patrick[i], typeof patrick[i]);

  //types[i] = typeof patrick[i];
  types.push(typeof patrick[i]);
}
// How to create a new array based on the values of an original array

console.log(types);

const years = [1999, 1992, 2002, 2010];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2025 - years[i]);
}

console.log(ages);

// Continue and break

// continue
console.log(`--- ONLY STRINGS ---`);
for (let i = 0; i < patrick.length; i++) {
  if (typeof patrick[i] !== `string`) continue;
  console.log(patrick[i], typeof patrick[i]);
  types.push(typeof patrick[i]);
}

// break
console.log(`--- BREAK WITH NUMBER ---`);
for (let i = 0; i < patrick.length; i++) {
  if (typeof patrick[i] === `number`) break;
  console.log(patrick[i], typeof patrick[i]);
  types.push(typeof patrick[i]);
}
*/

// looping backwards and loops in loops:
