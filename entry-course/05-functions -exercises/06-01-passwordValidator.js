function passwordValidator(password) {

    const isValid = 'Password is valid';
    let isNotValid = [];
    let count = 0;

    isValidLength(password);
    isContainOnlyLettersAndDigits(password);
    isContainsAtLeastTwoDigits(password);

    function isValidLength(password) {
        if (password.length >= 6 && password.length <= 10) {
            return count += 1;
        }
        return isNotValid.push('Password must be between 6 and 10 characters')
    }

    function isContainOnlyLettersAndDigits(password) {
        let someRegex = new RegExp('^[A-Za-z0-9]*$', 'g')
        let isMatch = someRegex.test(password);
        if (isMatch) {
        return count += 1;
        }
        return isNotValid.push('Password must consist only of letters and digits')
    }
    
    

    function isContainsAtLeastTwoDigits(password) {
        let countDigit = 0;
        for (i = 0; i < password.length; i++) {
            if (password.charCodeAt(i) > 47 && password.charCodeAt(i) < 58) {
                countDigit += 1;
            }
        }

        if (countDigit >= 2) {
            return count += 1;
        }
        return isNotValid.push('Password must have at least 2 digits')
    }
    
    if (count === 3) {
        return console.log(isValid)
    }
    return console.log(isNotValid.join('\n'))
}

passwordValidator('pass');
passwordValidator('APass123');
passwordValidator('Pa$s$s');