class Person {

    constructor(first, second) {
        this._firstName = first.length < 1 ? `Enter corect first name!` : first
        this._lastName = second;
        //this.fullName = `${this.firstName} ${this.lastName}`

    }

    get firstName() {
        return this._firstName
    }

    set firstName(value) {
        if (value.length < 1) { 
            throw `Enter corect first name!`;
        }
        this._firstName = value;
    }

    get lastName() {
        return this._firstName
    }

    set lastName(value) {
        this._lastName = value;
    }

}

const person1 = new Person('', 'Ivanov');
console.log(person1);

person1._firstName = ''
console.log(person1);
