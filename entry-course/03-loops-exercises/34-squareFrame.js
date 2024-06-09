function squareFrame(num) {

    for (let i = 1; i <= num; i++) {

        if (i === 1 || i === num) {
            
            let differentLine = ''

            for (let j = 1; j <= num; j++) {

                if (j === 1 || j === num) {
                    differentLine += '+ ';
                } else {
                    differentLine += '- ';
                }
            }

            console.log(differentLine);

        } else {

            let normalLine = ''

            for (let j = 1; j <= num; j++) {

                if (j === 1 || j === num) {
                    normalLine += '| ';
                } else {
                    normalLine += '- ';
                }
            }

            console.log(normalLine);
        }
    }
}

squareFrame(3);
squareFrame(4);
squareFrame(5);
squareFrame(6);