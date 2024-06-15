function zeroMatrix(input) {

    const matrix = input.map(row => row.split(' ').map(el => Number(el)));

    const newMatrix = matrix.map(row => row.map(el => el = Number(el)));

    for (let i = 0; i < matrix.length; i++) {
        
        if (matrix[i].includes(0)) {
            newMatrix[i] = matrix[i].map(el => el = 0);
        }
        
        for (let j = 0; j < matrix[i].length; j++) {

            if (matrix[i][j] === 0) {

                for (let k = 0; k < matrix.length; k++) {
                    newMatrix[matrix.length - 1 - k][j] = 0;
                }
            }
        }
    }

    for (let r of newMatrix) {
        console.log(r.join(' '));
    }
}

zeroMatrix([
    "1 2 3",
    "4 0 6",
    "7 8 9"
]);

zeroMatrix([
    "1 2 3 0",
    "4 5 6 7",
    "0 8 9 1"
]);