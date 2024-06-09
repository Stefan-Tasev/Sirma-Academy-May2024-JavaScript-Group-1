function alternativeConditions1(number) {

    let numberLine = 0;
    let rest = 0;
    let currentNumber = 0;

    while(true) {
        numberLine++;
        number -= numberLine;

        if (number === 0) {
            break;
        }

        if (number < numberLine ) {
            rest = number;
            break;
        }
    }


    for (let i = 1; i <= numberLine; i++) {

        let line = ' '.repeat((numberLine - i) * 2);

        for (let j = 1; j <= i; j++) {
            currentNumber++;

            if (j === i) {
                line += currentNumber.toString();
            } else {
                line += currentNumber.toString() + ' ';
            }
        }

        console.log(line);
    }

    if (rest) {

        let lastLine = ' '.repeat(2 * (numberLine - rest));

        for (let x = 1; x <= rest; x++) {
            currentNumber++;

            if (x === currentNumber) {
                lastLine += currentNumber.toString();
            } else {
                lastLine += currentNumber.toString() + ' ';
            }
        }

        console.log(lastLine);
    }

}

alternativeConditions1(10);
alternativeConditions1(7);
alternativeConditions1(12);
alternativeConditions1(15);


function alternativeConditions2(number) {

    let numberLine = 0;
    let rest = 0;
    let currentNumber = 0;

    while(true) {
        numberLine++;
        number -= numberLine;

        if (number === 0) {
            break;
        }

        if (number < numberLine ) {
            numberLine++;
            break;
        }
    }


    for (let i = 1; i <= numberLine; i++) {

        let line = ' '.repeat(numberLine - i);

        for (let j = 1; j <= i; j++) {
            currentNumber++;

            if (j === i) {
                line += currentNumber.toString();
            } else {
                line += currentNumber.toString() + ' ';
            }
        }

        console.log(line);
    }
}

alternativeConditions2(10);
alternativeConditions2(7);
alternativeConditions2(12);
alternativeConditions2(15);