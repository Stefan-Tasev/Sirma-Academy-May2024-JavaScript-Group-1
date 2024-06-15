function vegetableMarket(product, day, quantity) {
    let result = 0;

    if (day == 'Saturday' || day == 'Sunday') {
        switch(product) {
            case 'tomato': result = quantity * 2.80;
                break;
            case 'onion': result = quantity * 1.30;
                break;
            case 'lettuce': result = quantity * 0.85;
                break;
            case 'cucumber': result = quantity * 1.75;
                break;
            case 'pepper': result = quantity * 3.50;
                break;
            default:
                console.log('error')
        }
    }
    else if (day == '(Monday' || day == 'Tuesday'|| day == 'Wednesday' || day == 'Thursday'|| day == 'Friday') {
        switch(product) {
            case 'tomato': result = quantity * 2.50;
                break;
            case 'onion': result = quantity * 1.20;
                break;
            case 'lettuce': result = quantity * 0.85;
                break;
            case 'cucumber': result = quantity * 1.45;
                break;
            case 'pepper': result = quantity * 5.50;
                break;
            default:
                console.log('error')
        }
    }
    else {
        console.log('error')
    }

    console.log(result.toFixed(2))
}

vegetableMarket('onion', 'Sunday', 3);