function negativePositiveNumbers(array) {

    //console.log(array.sort((a, b) => a - b).join('\n'));

    let currentArray = [];
    for (let i = 0; i<array.length; i++) {
        if (array[i] < 0) {
            currentArray.unshift(array[i]);
        } else {
            currentArray.push(array[i]);
        }
    }

    console.log(currentArray.join('\n'));
}

negativePositiveNumbers([3, -2, 0, -1]);
negativePositiveNumbers([7, -2, 8, 9]);