function excelSumFormula(matrix, string) {
    //const info = string.split(':').map(el => el.split('')).flat()

    let firstPart = string.split(':')[0];
    let secondPart = string.split(':')[1];

    let sum = 0;

    let findStarAndEndPoint = function(someString) {
        let charPart = '';
        let numberPart = '';

        for (let i = 0; i < someString.split('').length; i++) {

            if (Number(someString.split('')[i]) || Number(someString.split('')[i]) === 0) {
                numberPart += someString.split('')[i];
            } else {
                charPart += someString.split('')[i];
            }
        }

        return [charPart, numberPart];
    }

    let excelColumnNameToNumber = function(string) {

        let numColumn = 0;

        for (let i = 0; i < string.split('').length; i++) {
            numColumn += ((string[i].charCodeAt() - 64) * Math.pow(26, (string.length - 1 - i)));
        }

        return numColumn;
    }

    let starMatrixRow = Number(findStarAndEndPoint(firstPart)[1]) - 1;
    let endMatrixRow = Number(findStarAndEndPoint(secondPart)[1]);

    let starMatrixColumn = excelColumnNameToNumber(findStarAndEndPoint(firstPart)[0]) - 1;
    let endMatrixColumn = excelColumnNameToNumber(findStarAndEndPoint(secondPart)[0]);
    
    for ( let i = starMatrixRow; i < endMatrixRow; i++) {

        for (let j = starMatrixColumn; j < endMatrixColumn; j++) {
            sum += matrix[i][j];
        }
    }

    console.log(sum);
}

excelSumFormula(
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ],
    "A1:C2"
);

excelSumFormula(
    [
        [0, 1, 0, 0],
        [0, 0, 0, 1],
        [1, 0, 0, 0],
        [0, 1, 0, 0],
    ],
    "A1:B4"
);

excelSumFormula(
    [
        [0, 1, 0, 0],
        [0, 0, 0, 0],
        [1, 0, 0, 0],
        [0, 0, 0, 0],
    ],
    "A1:C4"
);