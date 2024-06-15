function factorialDivision(num1, num2) {

    let findFactorialSum = function(number) {

        let sum = 1;

        for (let i = 1; i <= number; i++) {

            sum *= i;
        }

        return sum;
    }


    let divideTwoNumbers = function(a, b) {

        return a / b;
    }

    result = divideTwoNumbers(findFactorialSum(num1), findFactorialSum(num2));

    console.log(result.toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);