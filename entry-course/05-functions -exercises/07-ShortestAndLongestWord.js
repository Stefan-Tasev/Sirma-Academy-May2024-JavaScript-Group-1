function shortestAndLongestWord(text) {

    let shortestWord = text;
    let longestWord = '';

    let findWordLength = function(word) {
        return word.length;
    }

    let pattern = new RegExp('[A-Za-z0-9]+', 'g');

    let words = text.matchAll(pattern);

    for (let word of words) {

        if (findWordLength(word[0]) > findWordLength(longestWord)) {
            longestWord = word[0];
        }

        if (findWordLength(word[0]) < findWordLength(shortestWord)) {
            shortestWord = word[0];
        }
    }
    
    console.log(`Longest -> ${longestWord}\nShortest -> ${shortestWord}`);

}

shortestAndLongestWord('Hello how are you today? I hope you are fine ');
shortestAndLongestWord('Lorem Ipsum is dummy text of the typesetting industry.');