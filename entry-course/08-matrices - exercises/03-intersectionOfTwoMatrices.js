function intersectionOfTwoMatrices(arr1, arr2) {

    const matrixA = [];
    const matrixB = [];
    const matrixC = [];

    for (let line of arr1) {
        matrixA.push(line.split(' '))
    }

    for (let line of arr2) {
        matrixB.push(line.split(' '))
    }

    for (let i = 0; i < matrixA.length; i++) {

        let currentRow = [];

        for (let j = 0; j < matrixA[i].length; j++) {

            if (matrixA[i][j] === matrixB[i][j]) {
                currentRow.push(matrixA[i][j]);
            } else {
                currentRow.push('*');
            }
        }

        matrixC.push(currentRow);
    }

    for (let row of matrixC) {
        console.log(row.join(' '));
    }
}

intersectionOfTwoMatrices(
    [
        "a b c d",
        "a b c d",
        "a b c d"
    ],
    [
        "k b c k",
        "a b g d",
        "a k c d"
    ]
);

intersectionOfTwoMatrices(
    [
        "1 2",
        "3 4",
        "5 6",
        "7 8",
        "9 1"],
    [
        "0 2",
        "3 1",
        "1 6",
        "7 4",
        "1 1"]
);