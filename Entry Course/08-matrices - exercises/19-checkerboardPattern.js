function checkerboardPattern(size) {

    const matrix = [];

    for (let i = 0; i < size; i++) {

        let row = [];
        if (i % 2 === 0){
            for (let j = 0; j < size; j++) {

                if (j % 2 === 0){
                    row.push(0);
                } else {
                    row.push(1);
                }
            }
        } else {
            for (let j = 0; j < size; j++) {

                if (j % 2 === 0){
                    row.push(1);
                } else {
                    row.push(0);
                }
            }
        }
        

        matrix.push(row);
    }

    for (let row of matrix) {
        console.log(row.join(' '));
    }
}

checkerboardPattern(3);
checkerboardPattern(4);
checkerboardPattern(5);