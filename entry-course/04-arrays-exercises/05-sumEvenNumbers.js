function sumEvenNumbers(array) {

    let sum = array.filter(el => Number(el) % 2 === 0).reduce((acc, el) => acc + Number(el), 0);

    console.log(sum);
}


sumEvenNumbers(['1','2','3','4','5','6']);
sumEvenNumbers(['3','5','7','9']);
sumEvenNumbers(['2','4','6','8','10']);