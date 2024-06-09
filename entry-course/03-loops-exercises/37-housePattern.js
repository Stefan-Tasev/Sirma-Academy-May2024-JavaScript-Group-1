function housePattern(num) {

    //??Input: A positive odd integer 'n' representing the ???height of the house.??

    if (num % 2 !== 0) {

        for (let i = 1; i <= num; i+=2) {

            let spaces = ' '.repeat((num - i) / 2);

            console.log(spaces + '*'.repeat(i) + spaces);

            if (i=== num) {
                console.log('*' + ' '.repeat(num-2) + '*');
                console.log('*' + ' '.repeat(num-2) + '*');
            }
        }
    } else {
        for (let i = 2; i <= num; i+=2) {

            let spaces = ' '.repeat(num - i);

            console.log(spaces + '* '.repeat(i) + spaces);

            if (i=== num) {
                console.log('* ' + ' '.repeat(2 * num - 4) + '*');
                console.log('* ' + ' '.repeat(2 * num - 4) + '*');
            }
        }
    }

}

housePattern(3);
housePattern(7);
housePattern(4);
housePattern(6);
housePattern(11);