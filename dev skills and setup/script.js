"use strict";
// TASK TO SOLVE A TEMPERATURE ARRAY PROBLEM

/*
const temperatures = [3, -2, -6, -1, `error`, 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== `number`) continue;

    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(
    `the max temperature is ${max} and the minimum temperature is ${min}`
  );
  // solving the amplitude
  return `The amplitude temperature is ` + (max - min);
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// SUB TASK FOR FUNTION TO RECIEVE TWO ARRAYS OF TEMPERATURES:

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== `number`) continue;

    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(
    `the max temperature is ${max} and the minimum temperature is ${min}`
  );
  return `The amplitude temperature is ` + (max - min);
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

// DEBUGGING WITH THE CONSOLE AND BREAKPOINTS:

const measureKelvin = function() {
  const measurement = {
    type: `temperature`,
    unit: `celcius`,
    //value: prompt(`Degrees celsius`),
    value: 10,
  };

  console.table(measurement)
  const kelvin = (Number(measurement.value) + 273);
  return kelvin;
}

console.log(measureKelvin());

// USIGN A DEBUGGER
const calcTempAmplitudebug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== `number`) continue;

    debugger;
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(
    `the max temperature is ${max} and the minimum temperature is ${min}`
  );
  return `The amplitude temperature is ` + (max - min);
};

const amplitudebug = calcTempAmplitudebug([3, 5, 1], [9, 4, 5]);
console.log(amplitudebug);
*/

// TASK TO PRINT PUT A STRING WITH VALUES FROM AN ARRAY:
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  // JUST LIKE THE TIME WITH sum we declare a variable as 0
  let str = "";

  for (let i = 0; i < arr.length; i++) {
    // LOOPING THROUGH THE ARRAY AND ALOS USING THE INDEX TO CALCULATE THE NUMBER OF DAYS THAT GOES BY
    str += `${arr[i]}°C in ${i + 1}days ... `;
  }
  console.log(`...` + str);
};

// SINCE THE FUNCTION IS NOT HARD CODED ANY VALUE GIVEN IN THE INVOKE OF THE FUNCTION WILL WORK BASED ON THE LOOP
printForecast(data1);
