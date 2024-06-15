function uniqueCodes(first, second, third) {

    if ((first > 0 && first < 10)
        && (second > 1 && second < 8)
        && (third > 0 && third < 10)) {

            for (let i = 1; i <= first; i++) {

                if (i % 2 === 0) {
                    for (let j = 1; j <= second; j++) {

                        let current = 0;
                        for (let x = 2; x <= j; x++) {

                            if (j % x === 0) {
                                current += 1;
                            }
                        }

                        if (current === 1) {

                            for (let k = 1; k <= third; k++) {

                                if (k % 2 === 0) {
                                    console.log(`${i} ${j} ${k}`)
                                }
                            }
                        }
                    }
                }
            }
    }
}

uniqueCodes(3, 5, 5);
uniqueCodes(6, 2, 6);
