function christmasTree(num) {

    if (num > 0 && num <= 100) {

        for (let i = 0; i <= num; i++) {

            let spaces = ' '.repeat(num - i);
            let stars = '*'.repeat(i);
            let pipe = ' | ';
            
            if (i !== 0) {
                console.log(spaces + stars + pipe + stars + spaces);
            } else {
                console.log(spaces + pipe + spaces);
            }
        }
    }
    
}

christmasTree(10);
christmasTree(1);
christmasTree(2);
christmasTree(3);
christmasTree(4);