function simpleCalculator(num1, num2, operator) {
    let result = 0;

    switch(operator) {
        case 'add': result = num1 + num2;
        break
        case 'subtract': result = num1 - num2;
        break
        case 'divide':
            if (num2 > 0) {
                result = num1 / num2;
            } 
            break
        case 'multiply': result = num1 * num2;
        break
    }
    console.log(result.toFixed(2));
}

simpleCalculator(10, 2, 'divide')