function chessboardChecker(input) {

    const matrix = input.map(row => row.split(' '));

    for (let i = 0; i < matrix.length; i++) {

        let jStart;
        let iStart;

        for (let j = 0; j < matrix[i].length; j++) {

            if (matrix[i][j] === '1') {
                jStart = j;
                iStart = i;
                break;
            }
        }

        if (jStart !== undefined && iStart !== undefined) {

            let current1 = iStart;
            for (let k = jStart + 1; k < matrix[i].length; k++) {
                

                if (matrix[iStart][k] === '1') {
                    console.log('Yes');
                    return;
                }

                if (++current1 < matrix.length) {
                    if (matrix[current1][k] === '1') {
                        console.log('Yes');
                        return;
                    }
                }
            }

            let current2 = jStart;
            for (let l = iStart + 1; l < matrix.length; l++) {
                
                if (matrix[l][jStart] === '1') {
                    console.log('Yes');
                    return;
                }

                if (--current2 >= 0) {
                    if (matrix[l][current2] === '1') {
                        console.log('Yes');
                        return;
                    }
                }
            }
        }
    }

    console.log('No');
}

chessboardChecker([
    "0 0 0 1",
    "0 0 0 0",
    "0 0 0 0",
    "0 0 0 0"
]);

chessboardChecker([
    "0 1 0 0",
    "0 0 0 0",
    "0 0 0 1",
    "0 1 0 0"
]);

chessboardChecker([
    "0 1 0 0",
    "0 0 0 1",
    "1 0 0 0",
    "0 0 1 0"
]);