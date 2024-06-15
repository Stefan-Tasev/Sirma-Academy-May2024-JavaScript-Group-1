function treePattern(h) {

    let lastLine = '';

    for (let i = 1; i <= h; i++) {
        let star = ' '.repeat(h - i) + '*'.repeat(2 * i - 1);

        if (i === 1) {
            lastLine = star
        }
        console.log(star);
    };

    console.log(lastLine);
};

treePattern(6);
treePattern(5);
treePattern(4);
treePattern(3);