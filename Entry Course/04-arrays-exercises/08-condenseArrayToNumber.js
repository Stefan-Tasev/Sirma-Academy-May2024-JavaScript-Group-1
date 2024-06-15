function condenseArrayToNumber(array) {

    while (array.length > 1) {
        
        let currentArray = [];

        for (let i = 0; i < array.length - 1; i++) {
            currentArray.push(array[i] + array[i + 1]);
        }

        array = currentArray;
    }

    console.log(array.join(''))
}

condenseArrayToNumber([2,10,3]);
condenseArrayToNumber([5,0,4,1,2]);
condenseArrayToNumber([1]);