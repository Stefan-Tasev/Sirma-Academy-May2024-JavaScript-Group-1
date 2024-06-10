function perfectNumber(number) {

    let findDivisors = function(number) {

        let divisors = [];

        for (let i = 1; i <= number / 2; i++) {

            if (number % i === 0) {
                divisors.push(i);
            }
        }

        return divisors;
    }

    let findSum = function(array) {
        return array.reduce((acc, el) => acc + el, 0);
    }

    let checkForAPerfectNumber = function(num1, num2, array) {
        
        if (num1 !== num2) {
            return "It's not so perfect.";
        }

        return `Perfect number!\n${array.join(' + ')}`;
    }

    result = checkForAPerfectNumber(number, findSum(findDivisors(number)), findDivisors(number));

    console.log(result);
}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);
