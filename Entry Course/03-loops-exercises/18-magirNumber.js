function magicNumber(first, second, third) {

    if ((first > 0 && first < 1000)
         && (second > first && second <= 1000)
         && (third > 0 && third <= 10000)) {

            let magic = third;
            let combination = 0;
            let isFind = false;

            for (let i = first; i <= second; i++) {

                for (let j = first; j <= second; j++) {
                    
                    combination += 1;
                    if (i + j === magic) {
                        console.log(`Combination ${combination} - (${i} + ${j} = ${magic})`);
                        isFind = true;
                        break;
                    }
                }
                if (isFind) {
                    break;
                }
            }

            if (!isFind) {
                console.log(`${combination} combinations - neither equals ${magic}`);
            }
            
    }
}

magicNumber(1, 10, 5);
magicNumber(23, 24, 20);
magicNumber(1, 2, 3);
magicNumber(1000, 2, 3);