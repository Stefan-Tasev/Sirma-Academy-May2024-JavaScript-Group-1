function sumMatrixElements(array) {

    let rowCount = array.length;
    let columnCount = array[0].length;
    let sumAllMartixElement = array.reduce((sum, row) => row.reduce((acc, el) => acc + el, sum), 0)

    console.log(rowCount);
    console.log(columnCount);
    console.log(sumAllMartixElement);
}

sumMatrixElements([[7, 1, 3, 3, 2, 1], [1, 3, 9, 8, 5, 6], [4, 6, 7, 9, 1, 0]]);
sumMatrixElements([[10, 11, 12, 13],[14, 15, 16, 17]]);