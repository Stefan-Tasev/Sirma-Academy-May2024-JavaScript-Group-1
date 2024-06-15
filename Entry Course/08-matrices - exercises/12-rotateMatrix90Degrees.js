function rotateMatrix90Degrees(input) {

    const matrix = input.map(row => row.split(' ').map(el => Number(el)));

    const rotateMatrix = [];

    for (let i = 0; i < matrix.length; i++) {

        for (let j = 0; j < matrix.length; j++) {
            if (!rotateMatrix[j] ) {
                rotateMatrix[j] = [];
            }

            rotateMatrix[j].unshift(matrix[i][j]);
        }
    }

    for (let row of rotateMatrix) {
        console.log(row.join(' '))
    }
}

rotateMatrix90Degrees([
    "1 2 3",
    "4 5 6",
    "7 8 9"
]);

rotateMatrix90Degrees([
    "0 1 2 3",
    "4 5 6 7",
    "8 9 10 11",
    "12 13 14 15"
]);