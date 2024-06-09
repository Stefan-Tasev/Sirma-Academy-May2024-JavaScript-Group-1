//Sirma-Academy-May2024-JavaScript-Group-1
function hello() {
    console.log('Hello, World');
}
hello();

function dataTypes() {
    let num1 = 100;
    console.log(num1);

    let num2 = 3.5;
    console.log(num2);
}

dataTypes();

function printName(name) {
    console.log(name);
}
printName('Stefan');

function readDifferentData(text, integer, realNumber) {
    console.log(text);
    console.log(integer);
    console.log(realNumber);
}

readDifferentData('Ivan', 100, 3.14);

function weatherForecast(city, degrees) {
    console.log(`Today in ${city} it is ${degrees} degrees.`)
}

weatherForecast('Sofia', 29);

function kilometersInMiles(kilometers) {
    const kmInMile = 0.621371;

    console.log(kilometers*kmInMile);
}

kilometersInMiles(123.5);

function calculate(numOne, numTwo) {
    let sum = numOne + numTwo;
    let difference = Math.abs(numOne-numTwo);
    let multyplication = numOne * numTwo;
    let arithmeticMean = sum / 2;

    console.log(`Sum: ${sum}`);
    console.log(`Difference: ${difference}`);
    console.log(`Product: ${multyplication}`);
    console.log(`Average: ${arithmeticMean}`);
}

calculate(8, 9);

function squareFace(side) {
    let result = side * side;

    console.log(result);
}
squareFace(5);

function time(minutes) {
    let hours = Math.floor(minutes/60);
    let restMinutes = minutes - hours*60;

    console.log(hours + ':' + restMinutes);
}

time(325)

function timeLeadinZero(minutes) {
    let hours = Math.floor(minutes/60);
    let restMinutes = minutes - hours*60;

    let hoursToString = '';
    let restMinutesToString = '';
    if (hours < 10) {
        hoursToString = hours.toString().padStart(2, '0');
    }
    else {
        hoursToString = hours.toString();
    }
    if (restMinutes<10) {
        restMinutesToString = restMinutes.toString().padStart(2, '0');
    }
    else {
        restMinutesToString = restMinutes.toString();
    }

    console.log(hoursToString + ':' + restMinutesToString)
}

timeLeadinZero(305)

function paintingRoom(yellow) {

    let red = yellow / 4;
    let white = yellow * 2;
    let total = red + yellow + white;

    console.log(`Red ${red}`);
    console.log(`Yellow' ${yellow}`);
    console.log(`White ${white}`);
    console.log(`Total ${total}`);
}

paintingRoom(42);

function convertEuroToLeva(euro) {
    let rateExchange = 1.95583; 
    console.log((euro*rateExchange).toFixed(2));
}

convertEuroToLeva(0.51);

function speedResult(meters, hours, munutes, seconds) {
    let result = meters / (hours*60*60 + munutes*60 + seconds);
    console.log(result.toFixed(6));
}

speedResult(600, 7, 35, 55);

function officeCosts(costs) {
    let firstCabinet = costs;
    let secondCabinet = costs * 0.8;
    let thirdCabinet = (firstCabinet + secondCabinet) * 1.15;

    let result = firstCabinet + secondCabinet + thirdCabinet;
    console.log(result.toFixed(3));
}
officeCosts(455.30);

function jurney(firstSpeed, secondSpeed) {
    let firstCarDistance = firstSpeed * (2 + 3);
    let secondCarDistance = secondSpeed * 3;

    let result = Math.abs(firstCarDistance - secondCarDistance);

    console.log(result)
}

jurney(75, 90);

function bodyMAssIndex(weight, height) {
    let bodyIndex = weight / Math.pow(height, 2);

    console.log(bodyIndex.toFixed(2));
}
bodyMAssIndex(70, 1.73);

function waterConsumption(water, count) {
    let result = water / (count * 7);

    console.log(result.toFixed(2));
}

waterConsumption(980, 7);

function electricityBill(unitConsumed, ratePerUnit) {
    
    const fixCharge = 10;
    let result = (unitConsumed * ratePerUnit) + fixCharge;

    console.log(result.toFixed(2));
}

electricityBill(150, 1.1);

function averageSpeed(distance, hours) {
    let speedAverage = distance / hours;

    console.log(speedAverage.toFixed(2))
}
averageSpeed(200, 2);

function fuelEfficiency(distance, fuelPerKilometer ) {
    let efficiency = distance / fuelPerKilometer;

    console.log(efficiency.toFixed(2));
}

fuelEfficiency(500, 40);

function circleCircumference(radius) {
    let result = 2 * Math.PI * radius;

    console.log(result.toFixed(2))
}

circleCircumference(10);