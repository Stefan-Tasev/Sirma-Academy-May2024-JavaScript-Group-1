function spiralMatrixTraversal(input) {
    
    const matrix = input.map(row => row.split(' '));

    let spiralOrder = [];
      
    while (matrix.length) {
        spiralOrder.push(
        ...matrix.shift(),
        ...matrix.map(a => a.pop()),
        ...(matrix.pop() || []).reverse(),
        ...matrix.map(a => a.shift()).reverse()
        );
    }
    
    console.log(spiralOrder.join(' '));
}

spiralMatrixTraversal([
    "1 2 3",
    "4 5 6",
    "7 8 9"
]);

spiralMatrixTraversal([
    "1 2 3 4",
    "5 6 7 8",
    "9 10 11 12",
    "13 14 15 16"
]);

spiralMatrixTraversal([
    "1 2",
    "3 4"
]);

