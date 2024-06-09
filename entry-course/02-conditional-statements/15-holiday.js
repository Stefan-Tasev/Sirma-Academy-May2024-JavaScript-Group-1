function holidayBudget(budget, season) {

    let destination = '';
    let typeHolyday = ''
    let realBudget = budget;

    if (budget <= 100) {
        destination = 'Bulgaria';
        if (season === 'summer') {
            typeHolyday = 'Camp';
            realBudget *= 0.30; 
        }
        else if (season === 'winter') {
            typeHolyday = 'Hotel';
            realBudget *= 0.70; 
        }
    }
    else if (budget <= 1000) {
        destination = 'Europe';
        if (season === 'summer') {
            typeHolyday = 'Camp';
            realBudget *= 0.40; 
        }
        else if (season === 'winter') {
            typeHolyday = 'Hotel';
            realBudget *= 0.80; 
        }
    }
    else {
        destination = 'Asia';
        typeHolyday = 'Hotel';
        realBudget *= 0.90;
    }
    result = `Somewhere in ${destination}\n${typeHolyday} - ${realBudget.toFixed(2)}`;
    console.log(result);
}
holidayBudget(1500, 'summer');