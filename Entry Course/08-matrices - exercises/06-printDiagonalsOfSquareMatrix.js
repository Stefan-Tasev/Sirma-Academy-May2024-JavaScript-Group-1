function printDiagonalsOfSquareMatrix(input) {

    const matrix = input.map(row => row.split(' ').map(el => Number(el)));

    let primaryDiagonal = [];
    let secondarydiagonal = [];
    for (let i = 0; i < matrix.length; i++) {

        primaryDiagonal.push(matrix[i][i]);
        secondarydiagonal.push(matrix[matrix.length - 1 - i][i]);

    }

    console.log(primaryDiagonal.join(' '));
    console.log(secondarydiagonal.join(' '));
}

printDiagonalsOfSquareMatrix([
    "1 2 3",
    "1 2 3",
    "1 2 3"
]);

printDiagonalsOfSquareMatrix([
    "1 2 3 2",
    "1 1 2 4",
    "1 2 1 4",
    "2 2 3 1"
]);