function fillTheMatrix(size, pattern) {

    let patternA = function(size) {

        const matrix = [];
        let current = 1;

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {

                if (!matrix[j]) {
                    matrix[j] = [];
                }

                matrix[j][i] = current;
                current++;
            }
        }

        return matrix;
    }

    let patternB = function(size) {

        const matrix = [];
        let current = 1;

        for (let j = 0; j < size; j++) {
            for (let i = 0; i < size; i++) {

                if (!matrix[i]) {
                    matrix[i] = [];
                }

                let row = i;
                if (j % 2 !== 0) {
                 row = size - 1 - i;
                }
                matrix[row][j] = current;
                current++;
            }
        }

        return matrix;
    }

    let printMatrix = function(arr) {
        
        for (let r of arr) {
            console.log(r.join(' '));
        }
    }

    if (pattern === 'A') {
        printMatrix(patternA(size));
    } else {
        printMatrix(patternB(size));
    }
    
}

fillTheMatrix(5, 'A');
fillTheMatrix(3, 'B');