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
*/

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
