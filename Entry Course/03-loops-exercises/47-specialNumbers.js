function specialNumbers(num) {

    for (let i = 1111; i <= 9999; i++) {
        
        let stringNumber = i.toString();

        let count = 0;

        for (let j = 0; j < stringNumber.length; j++) {

            if (num % Number(stringNumber[j]) === 0) {
                count++
            }
        }
        
        if (count === 4) {
            console.log(i);
        }
    }
}

specialNumbers(9);
specialNumbers(3);
specialNumbers(16);