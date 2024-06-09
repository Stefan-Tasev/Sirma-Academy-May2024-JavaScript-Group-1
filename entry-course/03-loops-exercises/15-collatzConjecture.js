function collatzConjecture(number) {

    let result = number.toString();

    while (true) {

        if (number < 2) {
            break;
        }

        if (number % 2 === 0) {
            number /= 2;
            result += ` ${number.toString()}`;
        }
        else {
            number = (number * 3) + 1;
            result += ` ${number.toString()}`;
        }
    }
    
    console.log(result);
}

collatzConjecture(6);
collatzConjecture(12);
collatzConjecture(9);
collatzConjecture(200);
collatzConjecture(15);