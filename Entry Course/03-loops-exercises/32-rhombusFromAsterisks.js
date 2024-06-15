function rhombusFromAsterisks(num) {

    for (let i = 1; i <= num; i++) {

        console.log(" ".repeat(num-i) + '* '.repeat(i));


    }

    for (let j = num - 1; j > 0; j--) {

        console.log(" ".repeat(num - j) + '* '.repeat(j));

    }
   
}

rhombusFromAsterisks(5);
rhombusFromAsterisks(4);
rhombusFromAsterisks(3);
rhombusFromAsterisks(2);
rhombusFromAsterisks(1);