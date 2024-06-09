function censor(sentence, word) {

    let result = sentence.replaceAll(word, '*'.repeat(word.length));

    return console.log(result);
}

censor('A small sentence with some words', 'small');
censor('Find the hidden word', 'hidden');
censor('A small sentence with small words', 'small');
