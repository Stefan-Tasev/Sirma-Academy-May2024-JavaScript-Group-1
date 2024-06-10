function compareMatrices(...array) {

    const firstMatrix = array[0];
    const secondMatrix = array[1];

    let isEqualLength = function(arr1, arr2) {
        if (arr1.length === arr2.length) {
            return true;
        }
    }
    
    if (isEqualLength(firstMatrix, secondMatrix)) {

        for (let i= 0; i < firstMatrix.length; i++) {

            if (isEqualLength(firstMatrix[i], secondMatrix[i])) {
                for (let j = 0; j < firstMatrix[i].length; j++) {

                    if (firstMatrix[i][j] !== secondMatrix[i][j]) {
                        console.log('not equal');
                        return;
                    }
                }
            } else {
                console.log('not equal');
                return;
            } 
        }
    } else {
        console.log('not equal');
        return;
    }

    console.log('equal')
}

compareMatrices(
    [[1,2,3],[2,1,3]],
    [[1,2,3],[2,1,3]]
);
compareMatrices(
    [[1,2,3],[4,5,6]],
    [[1,3],[4,5]]
);