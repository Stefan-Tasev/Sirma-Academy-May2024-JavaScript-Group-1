function matrixBorderFlip(input) {

    let matrix = input.map(row => row.split(' '));
    const newMatrix = [];
    let firstElement;
    let lastElement;

    for (let i = 0; i < matrix.length; i++) {

        matrix = input.map(row => row.split(' '));

        if (i === 0) {
            lastElement = matrix[i].pop();
            firstElement = matrix[i + 1].shift();
            matrix[i].unshift(firstElement)
            newMatrix.push(matrix[i]);
        }
        else if (i === (matrix.length - 1)) {
            lastElement = matrix[i - 1].pop();
            firstElement = matrix[i].shift();
            matrix[i].push(lastElement)
            newMatrix.push(matrix[i]);
        } 
        else {
            lastElement = matrix[i - 1].pop();
            firstElement = matrix[i + 1].shift();
            matrix[i].pop();
            matrix[i].shift();
            matrix[i].unshift(firstElement);
            matrix[i].push(lastElement);
            newMatrix.push(matrix[i]);
        }
    }

    console.log(newMatrix)
}

matrixBorderFlip([
    "1 2 3",
    "4 5 6",
    "7 8 9"
]);

matrixBorderFlip([
    "0 1 0 0",
    "0 0 0 1",
    "1 0 0 0",
    "0 1 0 0"
]);