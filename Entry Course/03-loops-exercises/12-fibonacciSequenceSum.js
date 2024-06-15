function fibonacciSequenceSum(number) {

    let result = 1;
    let a = 0;
    let b = 0;
    let current = 1;

    if (number <= 0) {

        result = 0;
    }
    
    for (let i = 1; i < number; i++) {
        
        a = b;
        b = current;
        current = a + b;
        result += current;
    }
    
    console.log(result);
}

fibonacciSequenceSum(10);
fibonacciSequenceSum(4);
fibonacciSequenceSum(5);
fibonacciSequenceSum(1);
fibonacciSequenceSum(0);