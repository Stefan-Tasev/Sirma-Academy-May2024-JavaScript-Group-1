function passwordGenerator(first, second) {
    
    let currentPassword = '';

    for (let i = 1; i <= first; i++) {

        let firstDigit = i;

        for (let j = 1; j <= first; j++) {

            let secondDigit = j;

            let startLetter = 'a'.charCodeAt();
            let endLetter = String.fromCharCode(startLetter + second).charCodeAt();

            for (let k = startLetter; k < endLetter; k++) {

                for (let l = startLetter; l < endLetter; l++) {

                    for (let x = 1; x <= first; x++) {

                        if (x > firstDigit && x > secondDigit) {

                            currentPassword = i.toString() + j.toString() + String.fromCharCode(k) + String.fromCharCode(l) + x.toString();
                            
                            console.log(currentPassword);
                        }
                    }
                }
            }
        }
    }
}

passwordGenerator(2, 4);
passwordGenerator(3, 1);