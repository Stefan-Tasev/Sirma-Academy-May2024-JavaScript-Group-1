class StringContainer {

    constructor(innerString , innerLength) {
        this.innerString  = innerString;
        this.innerLength = Number(innerLength);
        //this.initialState = innerString;
    }

    decrease(value) {
        let current = this.innerLength - Number(value);
        if (current < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength = current;
        }

        return this.innerLength;
    }

    increase(value) {
        return this.innerLength += Number(value);
    }

    toString() {
        if (this.innerString.length <= this.innerLength) {
            return this.innerString;
        } else {
            return `${this.innerString.slice(0, this.innerLength)}...`
        }
        
    }
}

let test = new StringContainer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test

test.decrease(1); 
console.log(test.toString()); // Test
test.decrease(1); 
console.log(test.toString()); // Test

test.increase(5); 
console.log(test.toString()); // Test
test.decrease(7); 
console.log(test.toString()); // Test