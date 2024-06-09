function extractANonDecreasingSubsequenceFromAnArray(array) {

    let currentMax = array[0];
    let currentArray = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= currentMax) {
            currentMax = array[i];
            currentArray.push(array[i]);
        }
    }

    console.log(currentArray.join(' '));
}

extractANonDecreasingSubsequenceFromAnArray([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractANonDecreasingSubsequenceFromAnArray([ 1, 2, 3, 4]);
extractANonDecreasingSubsequenceFromAnArray([ 20, 3, 2, 15, 6, 1]);