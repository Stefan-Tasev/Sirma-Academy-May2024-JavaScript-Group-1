function magicSquareChecker(input) {

    const matrix = input.map(row => row.split(' ').map(el => Number(el)));

    let rowSums = [];
    let colSums = [];
    let prymaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        rowSums.push(matrix[i].reduce((acc, el) => acc + el, 0));
          
        prymaryDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[matrix.length - 1 - i][i];

        for (let j = 0; j < matrix[i].length; j++) {
            if (!colSums[j]) {
                colSums[j] = [];
            }
            colSums[j].push(matrix[i][j]);
        }
    }

    colSums = colSums.map(row => row.reduce((acc, el) => acc+ el, 0)).flat();

    let allEqual = function(arr) {
        return new Set(arr).size === 1;
    }

    if (allEqual(rowSums) && allEqual(colSums) && (prymaryDiagonalSum === secondaryDiagonalSum) && (prymaryDiagonalSum === rowSums[0]) && (prymaryDiagonalSum === colSums[0])) {
        console.log('True');
        return;
    }
    console.log('False');
}

magicSquareChecker([
    "1 2 3",
    "4 5 6",
    "7 8 9"
]);

magicSquareChecker([
    "1 0 0 0",
    "0 0 0 1",
    "0 1 0 0",
    "0 0 1 0"
]);

magicSquareChecker([
    "8 1 6",
    "3 5 7",
    "4 9 2"
]);


