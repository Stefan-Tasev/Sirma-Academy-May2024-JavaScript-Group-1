function smallestOfThreeNumbers(first, second, third) {

    let getSmallerNumber = function(a, b) {
        return a < b ? a : b;
    }

    let smallestNumber = getSmallerNumber(getSmallerNumber(first, second), third);

    console.log(smallestNumber);
}

smallestOfThreeNumbers(2, 5, 3)
smallestOfThreeNumbers(600, 342, 123)
smallestOfThreeNumbers(25, 21, 4)