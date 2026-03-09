"Use strict";

// DEFAULT PARAMETERS:

//const booking = [];

//const createBooking = function (
//  flightNum,
//  numPassengers = 1,
//  price = 199 * numPassengers,
//) {
//// ES5
//  numPassengers = numPassengers || 1;
//    price = price || 199;

//  const funcBooking = {
//    flightNum,
//    numPassengers,
//    price,
//  };

//  console.log(booking);
//  booking.push(funcBooking);
//};

//createBooking("LH124");
//createBooking("LH123", 2, 800);
//createBooking("LH123", 2);
//createBooking("LH123", 5);
//createBooking("LH123", undefined, 1000);

//const flight = `KD456`;
//const patrick = {
//  name: "Patrick Amune",
//  passport: 23456789,
//};

//const checkIn = function (flightNum, passenger) {
//  flightNum = "AB789";
//  passenger.name = `Mr. ` + passenger.name;

//  const passP = Number(prompt("Passport Number"));

//  if (passenger.passport === passP) {
//    alert(`Check in`);
//  } else {
//    alert(`Wrong passport`);
//  }
//};

//checkIn(flight, patrick);
//console.log(flight);
//console.log(patrick);

//const newPassPort = function (person) {
//  person.passport = Math.trunc(Math.random() * 1000000);
//  console.log(person.passport);
//};

//newPassPort(patrick);
//checkIn(flight, patrick);

//function counter() {
//  let counter = 0;
//  return function () {
//    counter++;
//  };
//}

// FUNCTIONS ACCEPTING CALLBACK FUNCTIONS:

//const lufthansa = {
//  airline: "Lufthansa",
//  iataCode: "LH",
//  bookings: [],
//  book(flightNum, passengerName) {
//    console.log(
//      `${passengerName} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
//    );
//    this.bookings.push({
//      flight: `${this.iataCode}${flightNum}`,
//      passengerName,
//    });
//  },
//};

//lufthansa.book(239, "Patrick Amune");
//lufthansa.book(635, "John Mittens");
//console.log(lufthansa);

//const book = lufthansa.book;

//const euroWings = {
//  name: "Eurowings",
//  iataCode: "EW",
//  bookings: [],
//  //  book,
//};

//euroWings.book(65, 'Sarah Williams')
//console.log(euroWings);

// Call MEthod
//book.call(euroWings, 23, "Sarah Williams");
//console.log(euroWings);

//book.call(lufthansa, 239, "Mary Cooper");
//console.log(lufthansa);

//const swiss = {
//  airline: "Swiss",
//  iataCode: `LX`,
//  bookings: [],
//};

//book.call(swiss, 24, "Shanel Cooper");
//console.log(swiss);

//Apply method:
//const flightData = [433, `Goerge Cooper`];
//book.apply(swiss, flightData);
//console.log(swiss);

//const bookEW = book.bind(euroWings);
//bookEW(213, "Steve Williams");

//const bookLF = book.bind(lufthansa);
//bookLF(54, "Amune Tara");

//const bookLX = book.bind(swiss);
//bookLX(89, "Kayode Mejjri");

//const bookEW23 = book.bind(euroWings, 23);
//bookEW23("Patrick Gabriel");

// Objects with event listeners:
//lufthansa.planes = 300;
//lufthansa.buyNewPlane = function () {
//  console.log(this);

//  this.planes++;
//  console.log(this.planes);
//};

//document
//  .querySelector(".buy")
//  .addEventListener("click", lufthansa.buyNewPlane.bind(lufthansa));

// Partial Application:
//const addTax = (rate, value) => value + value * rate;
//console.log(addTax(0.1, 200));

//const addVAT = addTax.bind(null, 0.23);
//console.log(addVAT(100));
//console.log(addVAT(23));

// challenge to have a function that passes another function:

// MY ANSWER
//const addTax1 = function (value) {
//  return function (rate) {
//    return `${value + value * rate}`;
//  };
//};

//const taxman = addTax1(100);
//console.log(Number(taxman(0.5)));

//JONAHS ANSWER:
//const addTaxRate = function (rate) {
//  return function (value) {
//    return value + value * rate;
//  };
//};

//const addVAT2 = addTaxRate(0.5);
//console.log(addVAT2(100));
//console.log(addVAT2(23));

const poll = {
  question: `What is your favorite programming language?`,
  options: ["0: Javascript", "1: Python", "2: Rust", "3: C++"],

  // this answers property will create an array with four zeros, will learn more about it in the next section
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join(`\n`)}\n(Write option number)`,
      ),
    );
    console.log(answer);

    typeof answer === "number" &&
      answer < this.options.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults("string");
  },

  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`poll results are ${this.answers.join(", ")}`);
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] });
