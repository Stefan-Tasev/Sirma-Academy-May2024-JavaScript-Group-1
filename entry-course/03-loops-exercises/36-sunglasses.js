function sunglasses(num) {

    if (num >= 3 && num <= 100) {
        
        let baseUpDown = '*'.repeat(2 * num);
        let glassLeftRight = '*' + '/'.repeat(2 * num - 2) + '*';
        let spaces = ' '.repeat(num);

        for (let i = 1; i <= num; i++) {

            if (i === 1 || i === num) {
                console.log(baseUpDown + spaces + baseUpDown);
            }
            else if (i === Math.ceil(num / 2)) {
                console.log(glassLeftRight + '|'.repeat(num) + glassLeftRight);
            }
            else {
                console.log(glassLeftRight + spaces + glassLeftRight);
            }
        }
    }
}

sunglasses(3);
sunglasses(4);
sunglasses(5);