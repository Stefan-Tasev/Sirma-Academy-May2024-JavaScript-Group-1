function rowSumAndColumnSum(input) {

    let matrix = input.map(row => row.split(' ').map(element => Number(element)));

    let rowSums = [];
    let colSums = []; //Array(matrix[0].length).fill(0);

    let sumElenemtsOfArray = function(arr) {
        return arr.reduce((acc, el) => acc + el, 0);
    }


    for (let i = 0; i < matrix.length; i++) {

        rowSums.push(sumElenemtsOfArray(matrix[i]));

        for (let j = 0; j < matrix[i].length; j++) {
            if (!colSums[j] ) {
                colSums[j] = [];
            }
            
            colSums[j].push(matrix[i][j]);
        }
    }

    colSums = colSums.map(row => sumElenemtsOfArray(row));
    
    console.log(`Row Sums: ${rowSums.join(' ')}`);
    console.log(`Column Sums: ${colSums.join(' ')}`);
}

rowSumAndColumnSum([
    "1 2",
    "3 4",
    "5 6"
]);

rowSumAndColumnSum([
    "1 2 3",
    "4 5 6",
    "7 8 9"
]);