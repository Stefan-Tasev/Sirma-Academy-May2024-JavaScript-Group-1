function palindromeNumbers(array) {

    let numToString = function(number) {
        return number.toString();
    }

    let isPalindrom = function(numToString) {
        return numToString === numToString.split('').reverse().join('');
    }

    array.forEach(el => {
        console.log(
            isPalindrom(numToString(el))
        )
    });
}

palindromeNumbers([123, 323, 421, 121]);
palindromeNumbers([32, 2, 232, 1010]);