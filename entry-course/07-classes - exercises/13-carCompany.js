function carCompany(input) {
    const carRegister = new Map();

    for (let infoLine of input) {
        let car = infoLine.split(' | ')[0];
        let modelCar = infoLine.split(' | ')[1];
        let numberCars = Number(infoLine.split(' | ')[2]);

        if (!carRegister.has(car)) {
            carRegister.set(car, {});
        }
        
        if (carRegister.has(car) && !carRegister.get(car)[modelCar]) {
            carRegister.get(car)[modelCar] = numberCars;
        } else {
            carRegister.get(car)[modelCar] += numberCars;
        }
    }

    for (let car of carRegister) {
        console.log(car[0]);

        for (let key of Object.keys(car[1])) {
            console.log(`###${key} -> ${car[1][key]}`);
        }
    }
}

carCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);