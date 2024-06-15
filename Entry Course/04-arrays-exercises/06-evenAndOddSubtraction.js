function evenAndOddSubtraction(array) {

    let evenSum = array.filter(el => el % 2 === 0).reduce((acc, el) => acc + el, 0);
    let oddSum = array.filter(el => el % 2 !== 0).reduce((acc, el) => acc + el, 0);

    console.log(evenSum - oddSum);
}
evenAndOddSubtraction([1,2,3,4,5,6]);
evenAndOddSubtraction([3,5,7,9]);
evenAndOddSubtraction([2,4,6,8,10]);