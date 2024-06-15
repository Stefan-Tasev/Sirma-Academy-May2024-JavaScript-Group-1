function movieTicketPrice(age) {
    let price = 0;

    if (age < 13) {
        price = 5;
    }
    else if (age < 20) {
        price = 8;
    }
    else {
        price = 10;
    }

    console.log(`${price}$`)
}

movieTicketPrice(12);
movieTicketPrice(13);
movieTicketPrice(19);
movieTicketPrice(20);