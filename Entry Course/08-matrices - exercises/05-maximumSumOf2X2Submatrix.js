function maximumSumOf2X2Submatrix(input) {

    const matrix = input.map(row => row.split(' ').map(el => Number(el)));

    let sum = 0;
    let subMatrix = [];

    for (let i = 0; i < matrix.length - 1; i++) {

        for (let j = 0; j < matrix[i].length - 1; j++) {

            let currentSum = (matrix[i][j] + matrix[i][j + 1] + matrix[i + 1][j] + matrix[i + 1][j + 1]);

            if (currentSum > sum) {
                sum = currentSum;
                subMatrix = [[matrix[i][j], matrix[i][j + 1]], [matrix[i + 1][j], matrix[i + 1][j + 1]]];
            }
        }
    }

    console.log(sum);
    
    for (let row of subMatrix) {
        console.log(row.join(' '));
    }
}

maximumSumOf2X2Submatrix([
    "7 1 3 3 2 1",
    "1 3 9 8 5 6",
    "4 6 7 9 1 0"
]);
maximumSumOf2X2Submatrix([
    "10 11 12 13",
    "14 15 16 17"
]);