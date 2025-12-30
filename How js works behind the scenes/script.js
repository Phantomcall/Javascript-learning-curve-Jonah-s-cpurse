"use strict";

//function calcAge(birthyear) {
//  const age = 2025 - birthyear;

//  function printAge() {
//    const output = `${firstName} You are the ${age}, born in ${birthyear}`;
//    console.log(output);

//    if (birthyear >= 1981 && birthyear <= 1996) {
//      const str = `oh, you are a millenial, ${firstName}`;

//      console.log(str);
//    } else if (birthyear >= 1990 && birthyear <= 2010) {
//      const str1 = `oh, you are GEN-Z, ${firstName}`;

//      console.log(str1);

//      function add(a, b) {
//        return a + b;
//      }
//      console.log(add(10, 20));
//    }
//  }

//  printAge();

//  return age;
//}

//const firstName = `patrick`;
//calcAge(1999);

// HOISTING WITH VARIABLES
//console.log(me);
//console.log(job);
//console.log(year);

//var me = `patrick`;
//let job = `student`;
//const year = 1999;

// FUNCTION

//console.log(addDecl(2, 3));
//console.log(addExpr(2, 3));
//console.log(addArrow(2, 3));

//function addDecl(a, b) {
//  return a + b;
//}

//const addExpr = function (a, b) {
//  return a + b;
//};

//var addArrow = (a, b) => a + b;

// EXAMPLE
//console.log(numProducts);

//if (!numProducts) deleteShoppingCart();

//var numProducts = 10;

//function deleteShoppingCart() {
//  console.log(`All products deleted`);
//}

//var x = 1;
//let y = 2;
//const z = 3;

//console.log(x === window.x);
//console.log(this);

//const calcAge = function (birthyear) {
//  console.log(2037 - birthyear);
//  console.log(this);
//};

//calcAge(1999);

//const calcAgeArrow = birthyear => {
//  console.log(2037 - birthyear);
//  console.log(this);
//};

//calcAgeArrow(2002);

//const patrick = {
//  year: 1999,
//  calcAge: function () {
//    console.log(this);
//    console.log(2037 - this.year);
//  },
//};

//patrick.calcAge();

//const matilda = {
//  year: 2017,
//};

//matilda.calcAge = patrick.calcAge;
//matilda.calcAge();

//const f = patrick.calcAge;

//var firstName = `hilda`;

//const patrick = {
//  firstName: `Patrick`,
//  year: 1999,
//  calcAge: function () {
//    console.log(this);
//    console.log(2037 - this.year);

// SOLUTION 1:
//const self = this
//const isMIllenial = function () {
//  console.log(self.year >= 1981 && self.year <= 1996);
//   console.log(this.year >= 1981 && this.year <= 1996);
//};

// SOLUTION 2:
//    const isMIllenial = () => {
//      console.log(this);
//      console.log(this.year >= 1981 && this.year <= 1996);
//    };

//    isMIllenial();
//  },

//  greet: function () {
//    console.log(`hey ${this.firstName}`);
//  },
//};

//patrick.greet();
//patrick.calcAge();

//// ARGUMENTS KEYWORD:
//const addExpr = function (a, b) {
//  console.log(arguments);
//  return a + b;
//};
//addExpr(2, 5);

//var addArrow = (a, b) => a + b;

const faridat1 = {
  firstName: `Faridat`,
  lastName: `Usman`,
  age: 27,
};

function marriedPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedFaridat = marriedPerson(faridat1, `Abbas`);

//const marriedFaridat = faridat;
//marriedFaridat.lastName = `Abbas`;

console.log(`Before:`, faridat1);
console.log(`After:`, marriedFaridat);

const faridat = {
  firstName: `Faridat`,
  lastName: `Usman`,
  age: 27,
  family: [`Nadir`, `Fatah`],
};

// SHALLOW COPY:
const faridatCopy = { ...faridat };
faridatCopy.lastName = `Abbas`;

console.log(faridat, faridatCopy);

// DEEP COPY / DEEP CLONE:

const faridatClone = structuredClone(faridat);
 