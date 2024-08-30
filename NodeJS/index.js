import os from 'os'; //import core NodeJS module
//import calculator from 'calculator'; //import external NPM modules

import calculator from "./calculator.js";

/* CommonJS default import
const { sum } = require('./calculator');
const calculator = require('./calculator');
calculator.sum */

console.log('Hello NodeJs App!');
//console.log(sum(2, 3));
console.log(calculator.sum(2, 3));