function maximalSum(input) {

    const matrix = input.map(row => row.split(' ').map(el => Number(el)));

    let sum = 0;
    let subMatrix = [];

    for (let i = 0; i < matrix.length - 2; i++) {

        for (let j = 0; j < matrix[i].length - 2; j++) {

            let currentSum = (
                matrix[i + 0][j + 0] + matrix[i + 0][j + 1] + matrix[i + 0][j + 2] + 
                matrix[i + 1][j + 0] + matrix[i + 1][j + 1] + matrix[i + 1][j + 2] + 
                matrix[i + 2][j + 0] + matrix[i + 2][j + 1] + matrix[i + 2][j + 2]);

            if (currentSum > sum) {
                sum = currentSum;
                subMatrix = [
                    [matrix[i + 0][j + 0], matrix[i + 0][j + 1], matrix[i + 0][j + 2]], 
                    [matrix[i + 1][j + 0], matrix[i + 1][j + 1], matrix[i + 1][j + 2]],
                    [matrix[i + 2][j + 0], matrix[i + 2][j + 1], matrix[i + 2][j + 2]],
                ];
            }
        }
    }

    console.log(`Sum = ${sum}`);
    
    for (let row of subMatrix) {
        console.log(row.join(' '));
    }

}

maximalSum([
    "1 5 5 2 4",
    "2 1 4 14 3",
    "3 7 11 2 8",
    "4 8 12 16 4"
]);

maximalSum([
    "1 0 4 3 1 1",
    "1 3 1 3 0 4",
    "6 4 1 2 5 6",
    "2 2 1 5 4 1",
    "3 3 3 6 0 5"
]);
