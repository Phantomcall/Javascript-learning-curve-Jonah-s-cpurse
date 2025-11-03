"use strict";
// TASK TO SOLVE A TEMPERATURE ARRAY PROBLEM

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
