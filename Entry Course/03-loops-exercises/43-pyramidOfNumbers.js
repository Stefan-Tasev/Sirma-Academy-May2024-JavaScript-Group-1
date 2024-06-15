function pyramidOfNumbers(number) {

    let currentNumber = 1;

    for (let i = 1; i <= number; i++) {
        
        let isEnd = false;
        let row = '';

        for (let j = 1; j <= i; j++) {

            row += currentNumber + ' ';
            currentNumber++;
            
            if (currentNumber > number) {
                isEnd = true;
                break
            }
        }

        console.log(row);
        if (isEnd) {
            break;
        }
    }
}

pyramidOfNumbers(7);
pyramidOfNumbers(10);
pyramidOfNumbers(12);