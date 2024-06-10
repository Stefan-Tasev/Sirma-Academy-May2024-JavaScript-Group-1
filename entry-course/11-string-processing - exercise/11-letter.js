function letter(someText, someWords) {

    let pattern = /_+/g;
    let resultRegex = someText.matchAll(pattern);

    for (let wordMatch of resultRegex) {
        let word = someWords.find(w => w.length === wordMatch[0].length);
        if (word) {
            someText = someText.replace(wordMatch[0], word);
        }
    }
    console.log(someText);
}

letter('Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so many _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']
);