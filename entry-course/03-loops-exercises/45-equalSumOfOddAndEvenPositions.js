function equalSumOfOddAndEvenPositions(first, end) {

    let isMatching = false;

    for (let i = first; i <= end; i++) {

        let stringNumber = i.toString();

        let evenSum = 0;
        let oddSum = 0;

        for (let j = 0; j < stringNumber.length; j++) {
            
            if (j % 2 === 0) {
                evenSum += Number(stringNumber[j]);
            } else {
                oddSum += Number(stringNumber[j]);
            }
        }

        if (evenSum === oddSum) {
            console.log(i);
            isMatching = true;
        }
    }

    if (!isMatching) {
        console.log('None');
    }
}

equalSumOfOddAndEvenPositions(100000, 100050);
equalSumOfOddAndEvenPositions(299900, 300000);
equalSumOfOddAndEvenPositions(100115, 100120);