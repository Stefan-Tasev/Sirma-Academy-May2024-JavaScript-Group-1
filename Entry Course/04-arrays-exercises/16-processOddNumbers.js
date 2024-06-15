function processOddNumbers(array) {

    console.log(
        array
            .filter((_, index) => index % 2 !== 0)
            .reverse()
            .map(el => el * 2)
    );

    /* let oddArray = function(array) {
        return array.filter((_, index) => index % 2 !== 0);
    }

    let doubledArray = function(array) {
        return array.map(el => el * 2);
    }

    let reversedArray = function(array) {
        return array.reverse();
    }

    console.log(
        reversedArray(doubledArray(oddArray(array)))
    ) */
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);