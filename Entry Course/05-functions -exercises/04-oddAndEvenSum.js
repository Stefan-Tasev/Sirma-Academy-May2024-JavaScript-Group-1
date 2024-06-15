function oddAndEvenSum(number) {

    let numberToArrayDurringString= function(n) {
        return n.toString().split('');
    }

    let evenSum = numberToArrayDurringString(number)
        .filter(el => Number(el) % 2 === 0)
        .reduce((acc, el) => acc + Number(el), 0);

    let oddSum = numberToArrayDurringString(number)
        .filter(el => Number(el) % 2 !== 0)
        .reduce((acc, el) => acc + Number(el), 0);

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);