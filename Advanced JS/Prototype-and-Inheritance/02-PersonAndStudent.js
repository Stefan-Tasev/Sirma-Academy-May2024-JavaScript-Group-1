class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {

    constructor(name, age, school) {
        super(name, age);
        this.school = school;
    }
}

const person = new Person('Ivan', 'Ivanov');
console.log(person);

const student1 = new Student('Ivan', 'Ivanov', 'SomeSchool');
console.log(student1);

const student2 = new Student(person.name, person.age, 'SomeSchool');
console.log(student2);