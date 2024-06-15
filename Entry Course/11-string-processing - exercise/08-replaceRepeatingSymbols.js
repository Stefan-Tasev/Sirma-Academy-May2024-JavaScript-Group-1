function replaceRepeatingSymbols(someString) {

    if (someString) {

        let result = someString[0];
        let current = someString[0];

        for (let i = 0; i < someString.length; i++) {

            if (someString[i] === current) {
                continue
            }

            current = someString[i];
            result += someString[i];
        }

        console.log(result);
    }
}

replaceRepeatingSymbols('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingSymbols('qqqwerqwecccwd');