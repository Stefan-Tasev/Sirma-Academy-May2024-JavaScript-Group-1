function getPriceSwitch(product, city, quantity) {
    let result = 0;

    switch(city) {
        case 'Sofia':
            switch(product) {
                case 'tea': result = quantity * 0.50;
                break
                case 'water': result = quantity * 0.80;
                break
                case 'juice': result = quantity * 1.20;
                break
                case 'sweets': result = quantity * 1.45;
                break
                case 'chips': result = quantity * 1.60;
                break
            } break
        case 'Plovdiv':
            switch(product) {
                case 'tea': result = quantity * 0.40;
                break
                case 'water': result = quantity * 0.70;
                break
                case 'juice': result = quantity * 1.15;
                break
                case 'sweets': result = quantity * 1.30;
                break
                case 'chips': result = quantity * 1.50;
                break
            } break
        case 'Varna':
            switch(product) {
                case 'tea': result = quantity * 0.45;
                break
                case 'water': result = quantity * 0.70;
                break
                case 'juice': result = quantity * 1.10;
                break
                case 'sweets': result = quantity * 1.35;
                break
                case 'chips': result = quantity * 1.55;
                break
            } break
    }

    console.log(result.toFixed(2))
}

getPriceSwitch('sweets', 'Plovdiv', 1);


function getPriceIfElsefunction(product, city, quantity) {
    let result = 0;

    if (city === 'Sofia') {
        if (product === 'tea') {
            result = quantity * 0.50;
        }
        else if (product === 'water') {
            result = quantity * 0.80;
        }
        else if (product === 'juice') {
            result = quantity * 1.20;
        }
        else if (product === 'sweets') {
            result = quantity * 1.45;
        }
        else if (product === 'chips') {
            result = quantity * 1.60;
        }
    }
    else if (city === 'Plovdiv') {
        if (product === 'tea') {
            result = quantity * 0.40;
        }
        else if (product === 'water') {
            result = quantity * 0.70;
        }
        else if (product === 'juice') {
            result = quantity * 1.15;
        }
        else if (product === 'sweets') {
            result = quantity * 1.30;
        }
        else if (product === 'chips') {
            result = quantity * 1.50;
        }
    }
    else if (city === 'Varna') {
        if (product === 'tea') {
            result = quantity * 0.45;
        }
        else if (product === 'water') {
            result = quantity * 0.70;
        }
        else if (product === 'juice') {
            result = quantity * 1.10;
        }
        else if (product === 'sweets') {
            result = quantity * 1.35;
        }
        else if (product === 'chips') {
            result = quantity * 1.55;
        }
    
    }
    console.log(result.toFixed(2))
}

getPriceIfElsefunction('sweets', 'Plovdiv', 1);