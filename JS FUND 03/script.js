"use strict"; // THE USE OF STRICT MODE

/*let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive`);

//const interface = `Audio`;
//const private = 534;
*/

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
