function evenPairs(firstStart, secondStrart, firstEnd, secondEnd ) {

    if ((firstStart >= 10 && firstStart <= 90)
         && (secondStrart >= 10 && secondStrart <= 90)
         && (firstEnd >= 1 && firstEnd <= 9)
          && (secondEnd >= 1 && secondEnd <= 9)) {

            for (let i = firstStart; i <= (firstStart + firstEnd); i++) {

                for (let j = secondStrart; j <= (secondStrart + secondEnd); j++) {
                    
                    let firstIsPrime = true;
                    let secondIsPrime = true;

                    let countFirst = 0;
                    for (let k = 1; k < i; k++) {
                        
                        if (i % k === 0) {
                            countFirst += 1;
                        }

                        if (countFirst > 1) {
                            firstIsPrime = false
                            break;
                        }
                    }

                    let countSecond = 0;
                    for (let k = 1; k < j; k++) {
                        
                        if (j % k === 0) {
                            countSecond += 1;
                        }
                        
                        if (countSecond > 1) {
                            secondIsPrime = false;
                            break;
                        }
                    }
                
                    if (firstIsPrime && secondIsPrime) {
                        console.log(`${i}${j}`)
                    }
                    
                }
            }
    }
}

evenPairs(10, 20, 5, 5);
evenPairs(10, 30, 9, 6);