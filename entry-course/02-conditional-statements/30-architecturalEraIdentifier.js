function architecturalEraIdentifier(year, material) {

    if (material === 'stone') {
        if (year < 500) {
            console.log('Ancient');
        }
        else if (year <= 1500) {
            console.log('Medieval');
        }
        else {
            console.log('Uncertain');
        }
    }
    else if (material === 'wood') {
        if (year >= 1500 && year <= 1800) {
            console.log('Colonial');
        }
        else {
            console.log('Uncertain');
        }
    }
    else if (material === 'steel') {
        if (year >= 1800 && year <= 1900) {
            console.log('Industrial');
        }
        else if (year > 1900) {
            console.log('Modern');
        }
        else {
            console.log('Uncertain');
        }
    }
}

architecturalEraIdentifier(300, 'stone');
architecturalEraIdentifier(1500, 'wood');
architecturalEraIdentifier(1500, 'stone');
architecturalEraIdentifier(2000, 'steel');
architecturalEraIdentifier(1100, 'wood');
