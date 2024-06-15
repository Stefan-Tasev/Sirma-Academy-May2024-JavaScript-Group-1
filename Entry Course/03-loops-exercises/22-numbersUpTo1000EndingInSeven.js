function numbersUpTo1000EndingInSeven() {

    for (let i = 0; i <= 1000; i++) {
        // if (i.toString().endsWith('7')) {
        //     console.log(i);
        // }
        if (i % 10 == 7) {
            console.log(i);
        }
    }
}

numbersUpTo1000EndingInSeven();