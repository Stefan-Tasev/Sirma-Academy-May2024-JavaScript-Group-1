function cutAndReverse(someString) {

    let firstPart = someString.slice(0, someString.length/2).split('').reverse().join('');
    let secondPart = someString.slice(someString.length/2).split('').reverse().join('');
    console.log(firstPart);
    console.log(secondPart);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');