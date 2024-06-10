class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    meow() {
        return `${this.name}, age ${this.age} says meow`;
    }
}


function cat(array) {

    const catObject = [];

    for (let infoLine of array) {
        let [name, age] = infoLine.split(' ');

        let cat = new Cat(name, age);
        catObject.push(cat);
    }

    for (let cat of catObject) {
        console.log(cat.meow());
    }
}

cat(['Mellon 2', 'Tom 3']);
cat(['Branch -1', 'Poppy 3', 'Goldy 2']);