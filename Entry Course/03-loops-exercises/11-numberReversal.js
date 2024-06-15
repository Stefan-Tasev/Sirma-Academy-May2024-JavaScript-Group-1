function numberReversal(number) {

    //console.log(Number(number.toString().split('').reverse().join('')));

    let result = '';

    let stringNumber = number.toString();

    for (let i = (stringNumber.length - 1); i >= 0; i--) {

        result += stringNumber[i];
    }

    console.log(Number(result));
}

numberReversal(123456);
numberReversal(123);
numberReversal(9876);
numberReversal(505);
numberReversal(10203);
numberReversal(7);