function halfRhombusFromAsterisks(num) {

    for (let i = 1; i <= num; i++) {

        let line = '';

        for (let j = 0; j < i; j++) {

            line += '* '
        }

        console.log(line);
    }

    for (let i = num - 1; i > 0; i--) {

        let line = '';

        for (let j = 0; j < i; j++) {

            line += '* '
        }

        console.log(line);
    }
}

halfRhombusFromAsterisks(5);
halfRhombusFromAsterisks(4);
halfRhombusFromAsterisks(3);
halfRhombusFromAsterisks(2);
halfRhombusFromAsterisks(1);