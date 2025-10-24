"use strict"; // THE USE OF STRICT MODE

/*let hasDriversLicense = false;
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
*/

// TASK:

/*function checker(day) {
  day.toLocaleLowerCase() == "monday"
    ? console.log(`Today is ${day} and todays date is ${date}`)
    : day == "friday"
    ? console.log(`Today is ${day} and todays date is ${date}`)
    : day == "saturday" || day == "sunday"
    ? console.log(`Today is ${day} and todays date is ${date}`)
    : console.log(`It's the week day`);
}

let time = new Date();
let date = `${time.getHours()}/${time.getMinutes()}/${time.getSeconds()} ${time.getDate()}/${
  time.getMonth() + 1
}/${time.getFullYear()}`;
let month = "october";
let day = "friday";

switch (month.toLocaleLowerCase()) {
  case "january":
    checker("monday");
    break;
  case "february":
    checker("monday");
    break;
  case "october":
    checker("friday");
    break;
  default:
    console.log(`Hope you are having a great ${month}`);
}*/

function calcTip(bill) {
  let tipPercent =
    bill >= 50 && bill <= 300 ? 15 : bill <= 50 || bill >= 300 ? 20 : null;
  let tip = (tipPercent / 100) * bill;

  let finalBill = Number(bill) + Number(tip);

  if (bill >= 50 && bill <= 300) {
    console.log(
      `The bill is $${bill} and the tip is $${tip} so the total bill is $${finalBill}`
    );
  } else if (bill <= 50 || bill >= 300) {
    console.log(
      `The bill is $${bill} and the tip is $${tip} so the total bill is $${finalBill}`
    );
  }
}

const bill = [125, 555, 44];

const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
