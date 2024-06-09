function pyramidWithIncreasingDigits(num) {

    let increase = 0;

    for (let i = 1; i <= num; i++) {
        let line = ' '.repeat(num - i);

        for (let j = 1; j <= i; j++) {
            increase++
            line += increase.toString();
        }
        if (i > 1) {
            let decrease = increase - 1;
            for (let j = i; j > 1; j--) {
                line += decrease.toString();
                decrease--;
                increase--;
            }
        }
        console.log(line);
    }
}

pyramidWithIncreasingDigits(9);
pyramidWithIncreasingDigits(5);
pyramidWithIncreasingDigits(4);
pyramidWithIncreasingDigits(3);