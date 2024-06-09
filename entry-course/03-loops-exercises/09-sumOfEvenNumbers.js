function sumEvenNumbers(count) {

    let result = 0;

    for (let i = 0; i <= (2*count); i+=2) {

        result += i;
    }

    console.log(result);
}

sumEvenNumbers(3);
sumEvenNumbers(10);
sumEvenNumbers(0);
sumEvenNumbers(1);
sumEvenNumbers(5);