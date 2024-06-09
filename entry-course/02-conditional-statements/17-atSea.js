function atSeaVacation(days, typeRoom, assessment) {
    let singleRoomPrice = 25;
    let apartmentPrice = 50;
    let presidentApartmentPrice = 100;

    let totalPrice = 0;

    if (typeRoom === 'single room') {
        totalPrice = singleRoomPrice * (days-1);
    }
    else if (typeRoom === 'apartment') {
        if (days < 10) {
            totalPrice = (apartmentPrice * (days-1)) * 0.70;
        }
        else if (days <= 15) {
            totalPrice = (apartmentPrice * (days-1)) * 0.65;
        }
        else {
            totalPrice = (apartmentPrice * (days-1)) * 0.50;
        }
    }
    else if (typeRoom === 'president apartment') {
        if (days < 10) {
            totalPrice = (presidentApartmentPrice * (days-1)) * 0.90;
        }
        else if (days <= 15) {
            totalPrice = (presidentApartmentPrice * (days-1)) * 0.85;
        }
        else {
            totalPrice = (presidentApartmentPrice * (days-1)) * 0.80;
        }
    }

    if (assessment === 'positive') {
        totalPrice *= 1.25;
    }
    else if (assessment === 'negative') {
        totalPrice *= 0.90;
    }

    console.log(totalPrice.toFixed(2));
}

atSeaVacation(11, 'apartment', 'positive');
atSeaVacation(30, 'president apartment', 'negative');
atSeaVacation(12, 'single room', 'positive');
atSeaVacation(2, 'apartment', 'positive');
