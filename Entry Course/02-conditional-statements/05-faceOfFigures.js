function faceOfFigures(figure, a, b) {

    let area = 0;

    switch(figure) {
        case 'square': area = a * a;
            break;
        case 'rectangle': area = a * b;
            break;
        case 'circle': area = Math.PI * a * a;
            break;
        case 'triangle': area = a * b / 2;
            break;
    }

    console.log(area.toFixed(2));
}

faceOfFigures('circle', 10);