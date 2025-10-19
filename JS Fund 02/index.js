/*let js = `amazing`;

console.log(40 + 8 + 23 - 10);

console.log(`Jonas`);
console.log(23); 

let firstName = `Jonas`;

console.log(firstName);

let jonas_matilda = `JM`;

let PI = 3.1415;

let myFirstJob = `Programmer`;

let myCurrentJob = `Teacjer`

console.log(myFirstJob);

true;
console.log(true);

let javascriptisFun = true;

console.log(typeof true);
console.log(typeof javascriptisFUn);
console.log(typeof 23);
console.log(typeof `Jonas`);

javascriptisFun = `YES!`;
console.log(typeof javascriptisFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);

let age = 30;

age = 31;

const birthYear = 1991;

const job = `Teacher`;


const now = 2025;
const ageJonas = now - 1999;
const ageSarah = now - 1992;

console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 which just means 2 to the power of 3 which is = 2 * 2 * 2

const firstName = `Jonas`;
const lastName = `Schmedtmann`;

console.log(firstName + " " + lastName);

// These are assignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas < ageSarah);

const isFullAge = ageSarah >= 18;

console.log(isFullAge);

console.log(now - 1999 < now - 1992);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

const averageAge = (ageJonas + ageSarah) / 2;
console.log( averageAge);


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark + ', ' + BMIJohn);
console.log(markHigherBMI);

const firstName = `Patrick`;
const job = `Student`;
const birthYear = 1999;
const year = 2025;

const Patrick =
  `I'm ` + firstName + `, a ` + (year - birthYear) + ` year` + ` old ` + job;

console.log(Patrick);

const patrickNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(patrickNew);

console.log(`Just a regular string...`);

console.log(`String with
mlutiple
lines`);

const birthYear = prompt(`Enter Birth Year:`);
const now = 2025
const age = now - birthYear;

if (age >= 18) { 
  console.log(`You are old enough🤯`);
} else {
  const yearsleft = 18 - age;
  console.log(`you are not old enough, wait another ${yearsleft} years`);
}

const birthYear = prompt(`What year were you born?`);

let century;

if (birthYear <= 2000) {
  century = `20th`;
} else {
  century = `21st`;
}

console.log(century);


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark + ", " + BMIJohn);
console.log(markHigherBMI);

if (markHigherBMI) {
  console.log(`Mark's BMI ${BMIMark.toFixed(1)} is higher than John's ${BMIJohn.toFixed(1)}`);
} else {
  console.log(`John's BMI ${BMIJohn.toFixed(1)} is higher than Mark's ${BMIMark.toFixed(1)}`);
}

// type convertion
const inputYear = `1991`;
console.log(Number(inputYear), inputYear);

console.log(Number(inputYear) + 18);

console.log(String(23), 23);

//type coercion
console.log(`I am ` + 23 + ` years old`);
console.log(`23` - `10` - 3);
console.log(`23` / `2`);

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(`Jonas`));
console.log(Boolean({}));
console.log(Boolean(``));

const money = 100;

if (money) {
  console.log(`Don't spend it all ;)`);
} else {
  console.log(`You should get a job (-_-)`);
}

let height = 0;

if (height) {
  console.log(`Height is defined`);
} else {
  console.log(`Height is undefined`);
}

const age = `18`;

if (age === 18) console.log(`You just became an adult`);

if (age == 18) console.log(`You just became an adult :D (loose)`);

const favNumber = Number(prompt(`What is your favorite Number?`));

console.log(favNumber);
console.log(typeof favNumber);

if (favNumber === 23) {
  console.log(`Cool 23 is an amazing number`);
} else if (favNumber === 7) {
  console.log(`7 is also a cool number`);
} else if (favNumber === 9) {
  console.log(`9 is also a cool number`);
} else {
  console.log(`Number is not 23 or 7 or 9`);
}

if (favNumber !== 23) {
  console.log(`This is not 23`);
} else {
  console.log(`Yay! 23`);
}

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense || hasGoodVision);

console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
  console.log(`Sarah is able to drive`);
} else {
  console.log(`Someone else should drive`);
}

const isTired = false;

console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log(`Sarah is able to drive`);
} else {
  console.log(`Someone else should drive`);
}


// TASK to determien the average score of both teams and then decide the winner:

let dolphinsAverage = (96 + 108 + 89) / 3;

let koalasAverage = (88 + 91 + 110) / 3;

console.log(dolphinsAverage, koalasAverage);

if (dolphinsAverage > koalasAverage) {
  console.log(`Dolphins Win!`);
} else if (koalasAverage > dolphinsAverage) {
  console.log(`Koalas Win!`);
} else if (dolphinsAverage === koalasAverage) {
  console.log(`It's a tie`);
}

// BONUS 1:

let dolphinsAverageB1 = (97 + 112 + 101) / 3;
let koalasAverageB1 = (109 + 95 + 123) / 3;

console.log(dolphinsAverageB1, koalasAverageB1);

let minimumScoreReq = 100;

if (koalasAverageB1 > dolphinsAverageB1 && koalasAverageB1 > minimumScoreReq) {
  console.log(`Koalas WIn!`);
} else if (
  dolphinsAverageB1 > koalasAverageB1 &&
  dolphinsAverageB1 > minimumScoreReq
) {
  console.log(`Dolphins WIn!`);
} else if (
  koalasAverageB1 === dolphinsAverageB1 &&
  koalasAverageB1 > minimumScoreReq &&
  dolphinsAverageB1 > minimumScoreReq
) {
  console.log(`Its a tie`);
}

// BONUS 2:
let dolphinsAverageB2 = (97 + 112 + 101) / 3;
let koalasAverageB2 = (109 + 95 + 106) / 3;

console.log(dolphinsAverageB2, koalasAverageB2);

if (
  dolphinsAverageB2 > koalasAverageB2 &&
  dolphinsAverageB2 > minimumScoreReq
) {
  console.log(`Dolphins Win!`);
} else if (
  koalasAverageB2 > dolphinsAverageB2 &&
  koalasAverageB2 > minimumScoreReq
) {
  console.log(`Koalas Win`);
} else if (
  dolphinsAverageB2 === koalasAverageB2 &&
  dolphinsAverageB2 > minimumScoreReq
) {
  console.log(`It's a tie`);
} else if (
  koalasAverageB2 === dolphinsAverageB2 &&
  koalasAverageB2 > minimumScoreReq
) {
  console.log(`It's a tie`);
} else {
  console.log(`No one wins, both teams suck`);
}

let age = prompt(`How old are you?`);

if (age <= 17) {
  alert(`You should be in school`);
} else if (age >= 18 && age < 55) {
  alert(`You are still young and active`);
} else if (age >= 55) {
  alert(`You are getting a bit old`);
} else {
  alert(`You are not on the list`);
}


const day = `Thursday`;

switch (day) {
  case `Monday`: // day === `Monday'
    console.log(`I plan my course structure`);
    console.log(`Go to coding meetup`);
    break;
  case `Tuesday`:
    console.log(`Prepare theory videos`);
    break;
  case `Wednesday`:
  case `Thursday`:
    console.log(`Wrie code examples`);
    break;
  case `Friday`:
    console.log(`Record ideos`);
    break;
  case `Saturday`:
  case `Sunday`:
    console.log(`Enjoy the weekend`);
    break;
  default:
    console.log(`Not a valid day`);
}

let day = prompt(`What day is it?`);

if (day === `Monday`) {
  console.log(`Plan course structure \n Go to coding meetup`);
} else if (day === `Tuesday`) {
  console.log(`Prepare theory videos`);
} else if (day === `Wednesday` || day === `Thursday`) {
  console.log(`Write code examples`);
} else if (day === `Friday`) {
  console.log(`Record videos`);
} else if (day === `Saturday` || day === `Sunday`) {
  console.log(`Enjoy the weekend`);
} else {
  console.log(`Not a valid day`);
}

const me = `Patrick`;

console.log(`I'm ${2037 - 1991} years oold ${me}.`);


const age = prompt(`How old are you`);

age >= 18
  ? console.log(`I like to drink wine🍷`)
  : console.log(`I like to drink juice 🧃`);


const drinkAge = age >= 18 ? `wine` : `water`;

console.log(drinkAge);

let drinkAge2 = prompt(`How old are you?`);

if (drinkAge2 >= 18) {
  console.log(`I like to drink wine 🍷`);
} else {
  console.log(`I like to drink juice 🧃`);
}

const age = prompt(`How old are you`);

console.log(`I like to drink ${age >= 18 ? `wine` : `water`}`);

// TASK to calculate the tip value of a restuarant

let bill = prompt(`Bill for customers meal`);
let tipPercent = bill <= 300 ? 15 : 20;
let tip = (tipPercent / 100) * bill;

let finalBill = Number(bill) + Number(tip);

bill >= 50 || bill <= 300
  ? console.log(
      `The bill was ${bill}, the tip was ${tip} and the final bill was ${finalBill}`
    )
  : console.log(
      `The bill was ${bill}, the tip was ${tip} and the final bill was ${finalBill}`
    );
*/
