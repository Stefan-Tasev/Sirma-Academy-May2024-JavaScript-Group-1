function matrixDiagonalSum(input) {

    const matrix = input.map(row => row.split(' ').map(el => Number(el)));
    let sumDiagonals = 0;

    for (let i = 0; i < matrix.length; i++) {
        sumDiagonals += matrix[i][i];
        sumDiagonals += matrix[matrix.length - 1 - i][i];
    }

    console.log(sumDiagonals);
}

matrixDiagonalSum([
    "1 2 3",
    "4 5 6",
    "7 8 9"
]);
matrixDiagonalSum([
    "10 11",
    "14 15"
]);