function rageExpenses(lostGames, headsetPrice, mousePrice, keyboardPrice, displayPrice) {

    let totalExpenses = 0;

    for (let i = 1; i <= lostGames; i++) {

        if (i % 2 === 0) {
            totalExpenses += headsetPrice;
        }
        if (i % 3 === 0) {
            totalExpenses += mousePrice;
        }
        if (i % 6 === 0) {
            totalExpenses += keyboardPrice;
        }
        if (i % 12 === 0) {
            totalExpenses += displayPrice;
        }
    }

    console.log(`Rage expenses: ${totalExpenses.toFixed(2)} lv.`)
}

rageExpenses(7, 2, 3, 4, 5);
rageExpenses(23, 12.50 ,21.50, 40, 200);