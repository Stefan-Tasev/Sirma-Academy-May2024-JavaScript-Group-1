function coinsAndNotes(oneCoinCount, twoCoinCount, fiveCoinCount, totalSum) {

    for (let i = 0; i <= oneCoinCount; i++) {

        for (let j = 0; j <= twoCoinCount; j++) {
            
            for (let k = 0; k <= fiveCoinCount; k++) {

                let currentSum = k * 5 + j * 2 + i * 1;

                if (currentSum === totalSum) {
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${totalSum} lv.`);
                }
            }
        }
    }
}

coinsAndNotes(3, 2, 3, 10);
coinsAndNotes(5, 3, 1, 7);