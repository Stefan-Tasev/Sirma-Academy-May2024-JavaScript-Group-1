function checkLeapYear(year) {

    if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
        console.log("It's a leap year!");
    }
    else {
        console.log("It's not a leap year.");
    }
}

checkLeapYear(2020);
checkLeapYear(1900);
checkLeapYear(2000);
checkLeapYear(2023);
checkLeapYear(1600);
