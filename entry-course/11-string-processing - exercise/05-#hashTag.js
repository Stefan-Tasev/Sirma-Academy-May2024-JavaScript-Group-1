function hashTag(someText) {

    const pattern = /#([a-z]+)/g;
    let specialWords = someText.matchAll(pattern);

    for (let word of specialWords) {
        
        console.log(word[1]);
    }
}

hashTag('Everyone uses # to tag a #special word in #facebook');
hashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');