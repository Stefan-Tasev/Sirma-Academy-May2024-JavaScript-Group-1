function discount(age, isMember) {

    let result = 0;

    if (age < 18) {
        result = 10;
    }
    else if (age < 65 && isMember === 'Yes') {
        result = 20;
    }
    else if (age < 65 && isMember === 'No') {
        result = 10;
    }
    else {
        result = 30;
    }

    console.log(`${result}% discount`)
}

discount(17, 'Yes');
discount(17, 'No');
discount(18, 'Yes');
discount(18, 'No');
discount(64, 'Yes');
discount(64, 'No');
discount(65, 'Yes');
discount(65, 'No');
