function arrowPattern(num) {
    
    for (let i = 1; i < num; i++) {

        console.log(' '.repeat(num - i - 1) + '* '.repeat(i));

        if (i === num - 1) {

            for (let j = 0; j < i; j++) {

                if (num % 2 === 0) {
                    console.log(' '.repeat(Math.floor(i / 2)) + '*'.repeat(i));
                }
                else {
                    console.log(' '.repeat(i / 2) + '*'.repeat(i - 1));
                }
            }
        }
    }
}

arrowPattern(7);
arrowPattern(4);
arrowPattern(6);