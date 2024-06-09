function revealWords(someWords, someString) {
    let words = someWords.split(', ');
    let sentenceArray = someString.split(' ');

    for (let word of sentenceArray) {
        if (word.includes('*')) {
            
        }
    }
}

revealWords('great', 'JavaScript* is ***** programming language');
revealWords('the, best, learn', 'JavaScript is *** **** language to *****');