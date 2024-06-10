function matrixBoundarySum(input) {

    const matrix = input.map(row => row.split(' ').map(el => Number(el)));

    let boundarySum = 0;

    for (let i = 0; i < matrix.length; i++) {
        if (i === 0 || (i === matrix.length - 1)) {
            boundarySum += matrix[i].reduce((acc, el) => acc + el, 0);
        } else {
            for (let j = 0; j < matrix[i].length; j++) {
                if (j === 0 || (j === matrix[i].length - 1)) {
                    boundarySum += matrix[i][j];
                }
            }
        }
    }

    console.log(boundarySum);
}

matrixBoundarySum([
    "1 2 3",
    "4 5 6",
    "7 8 9"
]);

matrixBoundarySum([
    "1 2 3 0",
    "4 5 6 7",
    "0 8 9 1"
]);