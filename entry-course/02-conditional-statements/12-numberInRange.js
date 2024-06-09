function checkNumber(number) {
    if (number >= -100 && number <= 100 && number !== 0) {
        console.log('Yes');
    }
    else {
        console.log('No');
    }
}

checkNumber(100);