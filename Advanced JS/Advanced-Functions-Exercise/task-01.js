const obj1 = {
    name: 'Alice',
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const obj2 = {
    name: 'Bob'
};

obj1.greet();

const greetFunction = obj1.greet;
const boundGreetFunction = greetFunction.bind(obj2);
boundGreetFunction();

obj1.greet();
const greetMethod = obj1.greet.bind(obj2);
greetMethod();
