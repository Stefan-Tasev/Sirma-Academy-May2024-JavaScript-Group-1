function makeupShopProfit(renovation, countPowder, countLipstick, countSpiral, countShadows, countConcealer) {

    const powderPrice = 2.60;
    const lipstickPrice = 3.00;
    const spiralPrice = 4.10;
    const shadowsPrice = 8.20;
    const concealerPrice = 2.00;

    let currentAmount = powderPrice*countPowder + lipstickPrice*countLipstick + spiralPrice*countSpiral + shadowsPrice*countShadows + concealerPrice*countConcealer;
    let currentCount = countPowder + countLipstick + countSpiral + countShadows + countConcealer;
    let discount = 0;

    if (currentCount > 50) {
        discount = currentAmount * 0.25;
    }

    let realProfit = (currentAmount - discount) * 0.9;

    if (realProfit >= renovation) {
        console.log(`Yes! ${(realProfit - renovation).toFixed(2)} BGN left.`);
    }
    else {
        console.log(`Not enough money! ${(renovation- realProfit).toFixed(2)} BGN needed.`);
    }

}
makeupShopProfit(40.8, 20, 25, 30, 50, 10);
makeupShopProfit(320, 8, 2, 5, 5, 1);