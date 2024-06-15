function leftArrowPattern(num) {

    for (let i = 1; i < num; i++) {

        console.log(' '.repeat(num - 1 - i) + '*'.repeat(i));
    }
    for (let j = num - 2; j > 0; j--) {

        console.log(' '.repeat(num - 1 - j) + '*'.repeat(j));
    }
}

leftArrowPattern(10);
leftArrowPattern(5);
leftArrowPattern(4);