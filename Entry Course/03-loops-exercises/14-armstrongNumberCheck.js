function armstrongNumberCheck(number) {

    let result = 0;

    for (let i = 0; i < number.toString().length; i++) {
        
        result += Math.pow(Number(number.toString()[i]), number.toString().length);
    }

    return console.log(number===result);
}

armstrongNumberCheck(153);
armstrongNumberCheck(370);
armstrongNumberCheck(123);
armstrongNumberCheck(407);