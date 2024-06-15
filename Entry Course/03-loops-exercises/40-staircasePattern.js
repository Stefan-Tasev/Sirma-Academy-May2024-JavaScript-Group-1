function staircasePattern(num) {

    for (let i = 1; i <= num; i++) {

        let stairs = '#'.repeat(i);

        if ( i < 3) {
            console.log(stairs);
        } else {
            console.log(' '.repeat((i - 2) * ((i - 2) + 1) / 2) + stairs);
        }
    }
}

staircasePattern(6);
staircasePattern(5);
staircasePattern(4);
staircasePattern(3);
staircasePattern(2);