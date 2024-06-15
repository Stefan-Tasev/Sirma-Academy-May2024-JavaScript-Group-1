function matrixAddition(...array) {
    
    const firstMatrix = array[0];
    const secondMatrix = array[1];

    for (let i = 0; i < firstMatrix.length; i++) {

        let lineResult = [];

        for (let j = 0; j < firstMatrix[i].length; j++) {

            lineResult.push(Number(firstMatrix[i][j]) + Number(secondMatrix[i][j]));
        }

        console.log(lineResult.join(' '));
    }
}

matrixAddition(
    [[1, 2], [3, 4]],
    [[2, 2], [2, 2]]
);

matrixAddition(
    [[1, 2, 3], [4, 3, 1]],
    [[1, 2, 3], [4, 2, 2]]
);