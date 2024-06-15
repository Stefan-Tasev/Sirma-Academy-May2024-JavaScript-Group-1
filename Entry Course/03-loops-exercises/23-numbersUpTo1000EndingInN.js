function numbersUpTo1000EndingInN(enddigit) {

    for (let i = 0; i <= 1000; i++) {

        if (i.toString().endsWith(enddigit.toString())) {
            console.log(i);
        }
        /* if (i % 10 == enddigit) {
            console.log(i);
        } */
    }
}

numbersUpTo1000EndingInN(6);
numbersUpTo1000EndingInN(8);