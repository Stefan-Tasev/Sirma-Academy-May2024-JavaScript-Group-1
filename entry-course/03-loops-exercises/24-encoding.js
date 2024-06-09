function encoding(number) {

    /* let reverseStringNumber = number.toString().split('').reverse().join('');

    for (let i = 0; i < reverseStringNumber.length; i++) {

        if (Number(reverseStringNumber[i]) === 0) {
            console.log('ZERO');
        }
        else {
            let current = String.fromCharCode(Number(reverseStringNumber[i]) + 33);
            console.log(current.repeat(Number(reverseStringNumber[i])));
        }
    } */

    let currentNumber = number;
    let lengthLoop = number.toString().length;

    for (let i = 0; i < lengthLoop; i++) {
        let current = currentNumber % 10;
        currentNumber = Math.floor(currentNumber / 10);
        if (current !== 0) {
            let symbol = String.fromCharCode(current + 33);
            //console.log(symbol.repeat(current));
            let line = '';
            for (let i = 0; i < current; i++) {
                line += symbol;
            }
            console.log(line);
        }
        else {
            console.log('ZERO');
        }
    }
}

encoding(9347439);
encoding(2049);