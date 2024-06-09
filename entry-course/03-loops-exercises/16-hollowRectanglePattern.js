function hollowRectanglePattern(row, column) {

    for (let i = 1; i <= row; i++) {
        let line = '';

        for (let j = 1; j <= column; j++) {
            
            if (i === 1 || i === row || j === 1 || j === column) {
                line += '*';
            }
            else {
                line += ' ';
            }
        }
        
        console.log(line);
    }
}

hollowRectanglePattern(4, 6);
hollowRectanglePattern(2, 2);
hollowRectanglePattern(3, 4);