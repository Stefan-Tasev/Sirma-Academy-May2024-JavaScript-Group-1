function pascalCaseSplitter(someString) {

    let pattern = /([A-Z][a-z]+)/gm;
    let splitString = someString.matchAll(pattern);
    let result = []

    for (let w of splitString) {
        result.push(w[0]);
    }

    console.log(result.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoying');