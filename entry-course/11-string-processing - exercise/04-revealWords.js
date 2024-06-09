function revealWords(someWords, someString) {

    let words = someWords.split(', ');
    let pattern = /\*+/g;
    let sentenceArray = someString.matchAll(pattern);
    
    for (let wordMatch of sentenceArray) {
        let word = words.find(w => w.length === wordMatch[0].length);
        if (word) {
            someString = someString.replace(wordMatch[0], word);
        }
    }
    console.log(someString);
}

revealWords('great', 'JavaScript* is ***** programming language');
revealWords('the, best, learn', 'JavaScript is *** **** language to *****');