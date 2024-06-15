function airlineLuggageCharges(weight, sizeTotal) {
    const maxWeight = 50;
    const maxSize = 158;

    let totalCosts = 0;

    if (weight > maxWeight) {
        totalCosts += 100;
    }

    if ((sizeTotal - maxSize < 21) && (sizeTotal - maxSize > 0)) {
        totalCosts += 50;
    }
    else if ((sizeTotal - maxSize < 51) && (sizeTotal - maxSize > 20)) {
        totalCosts += 100;
    }
    else if (sizeTotal - maxSize > 50) {
        totalCosts += 200;
    }

    if (weight > maxWeight && sizeTotal > maxSize) {
        totalCosts += 50;
    }

    // if we accepted that first step untill 20 is 'Slightly oversize'
    /* if (weight > maxWeight && (sizeTotal - maxSize > 20)) {
        totalCosts += 50;
    } */

    console.log(`$${totalCosts}`);
}

airlineLuggageCharges(50, 158);
airlineLuggageCharges(50, 159);
airlineLuggageCharges(51, 190);
airlineLuggageCharges(51, 220);