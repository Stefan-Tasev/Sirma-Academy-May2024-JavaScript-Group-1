function padawanEquipment(budjet, numberStudents, lightsabersPrice, robesPrice, beltsPrice) {
    
    if ((budjet > 0 && budjet <= 1000)
        && (numberStudents > 0 && numberStudents <= 100)
        && (lightsabersPrice > 0 && lightsabersPrice <= 100)
        && (beltsPrice > 0 && beltsPrice <= 100)
        && (robesPrice > 0 && robesPrice <= 100)) {

            let neededLightsabers = numberStudents + Math.ceil(numberStudents / 10);
            let beltsDiscount = Math.floor(numberStudents / 6) * beltsPrice
            let neededMoney = (neededLightsabers * lightsabersPrice) + (numberStudents * robesPrice) + ((numberStudents * beltsPrice) - beltsDiscount);

            if (neededMoney <= budjet) {
                console.log(`The money is enough - it would cost ${neededMoney.toFixed(2)}lv.`);
            }
            else {
                console.log(`George Lucas will need ${(neededMoney-budjet).toFixed(2)}lv more.`);
            }
        }
}

padawanEquipment(100, 2, 1.0, 2.0, 3.0);
padawanEquipment(100, 42, 12.0, 4.0, 3.0);