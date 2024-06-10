function passwordValidator(password) {

    let isEnoughtLength = function(word) {
        return word.length >= 6 && word.length <= 10;
    }

    let hasAtLeastTwoDigits = function(word) {
        let digits = word.split('').filter(el => Number(el)).length;

        return digits >= 2;
    }

    let isConsistOnlyLettersAndDigits = function(word) {
        let pattern = new RegExp('^[A-Za-z0-9]*$', 'g');

        let isMatch = pattern.test(word);

        return isMatch;
    }

    if (isEnoughtLength(password) && hasAtLeastTwoDigits(password) && isConsistOnlyLettersAndDigits(password)) {
        console.log('Password is valid');
        return;
    }

    if(!isEnoughtLength(password)) {
        console.log('Password must be between 6 and 10 characters');
    }

    if(!isConsistOnlyLettersAndDigits(password)) {
        console.log('Password must consist only of letters and digits');
    }

    if (!hasAtLeastTwoDigits(password)) {
        console.log('Password must have at least 2 digits');
    }

}

passwordValidator('pass');
passwordValidator('APass123');
passwordValidator('Pa$s$s');