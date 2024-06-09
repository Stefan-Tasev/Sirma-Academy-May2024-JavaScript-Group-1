function factorielCalculation(n) {

    let result = 1;

    for (let i = 1; i <= n; i++) {

        result *= i;
    }

    console.log(result);
}

factorielCalculation(5);
factorielCalculation(3);
factorielCalculation(0);
factorielCalculation(1);
factorielCalculation(10);