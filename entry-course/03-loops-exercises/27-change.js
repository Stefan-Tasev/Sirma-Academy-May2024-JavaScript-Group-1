function change(amount) {

    let countCoins = 0;

    while (true) {

        if (amount === 0) {
            break;
        }

        if (amount >= 50) {
            let current = Math.floor(amount / 50);
            countCoins += current;
            amount -= current * 50;
        }

        else if (amount >= 20) {
            let current = Math.floor(amount / 20);
            countCoins += current;
            amount -= current * 20;
        }

        else if (amount >= 10) {
            let current = Math.floor(amount / 10);
            countCoins += current;
            amount -= current * 10;
        }

        else if (amount >= 5) {
            let current = Math.floor(amount / 5);
            countCoins += current;
            amount -= current * 5;
        }

        else if (amount >= 2) {
            let current = Math.floor(amount / 2);
            countCoins += current;
            amount -= current * 2;
        }

        else if (amount >= 1) {
            let current = Math.floor(amount / 1);
            countCoins += current;
            amount -= current * 1;
        }

        else if (amount >= 0.5) {
            let current = Math.floor(amount / 0.5);
            countCoins += current;
            amount -= current * 0.5;
        }

        else if (amount >= 0.2) {
            let current = Math.floor(amount / 0.2);
            countCoins += current;
            amount -= current * 0.2;
        }

        else if (amount >= 0.1) {
            let current = Math.floor(amount / 0.1);
            countCoins += current;
            amount -= current * 0.1;
        }

        else if (amount >= 0.05) {
            let current = Math.floor(amount / 0.05);
            countCoins += current;
            amount -= current * 0.05;
        }

        else if (amount >= 0.02) {
            let current = Math.floor(amount / 0.02);
            countCoins += current;
            amount -= current * 0.02;
        }

         else if (amount < 0.02) {
            countCoins += 1;
            amount = 0;
        }
    }

    console.log(countCoins);
}

change(1.23);
change(87.94);
change(2);
change(0.56);
change(2.73);