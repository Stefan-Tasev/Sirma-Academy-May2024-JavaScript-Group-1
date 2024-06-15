function movieClassification(age) {
    if (age < 13) {
        console.log('U-rated movies');
    }
    else if (age < 18) {
        console.log('U and PG-13 rated movies');
    }
    else {
        console.log('All movies');
    }
}

movieClassification(12);
movieClassification(13);
movieClassification(17);
movieClassification(18);