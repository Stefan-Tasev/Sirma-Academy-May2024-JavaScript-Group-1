const stringManipulator = {
    value: '', // Initialize an empty string

    // Method to set the value of the string
    setValue(str) {
        this.value = str;
        return this; // Return 'this' for chaining
    },

    // Method to convert the string to uppercase
    toUpperCase() {
        this.value = this.value.toUpperCase();
        return this; // Return 'this' for chaining
    },

    // Method to convert the string to lowercase
    toLowerCase() {
        this.value = this.value.toLowerCase();
        return this; // Return 'this' for chaining
    },

    // Method to reverse the string
    reverse() {
        this.value = this.value.split('').reverse().join('');
        return this; // Return 'this' for chaining
    },

    // Method to get the current value of the string
    getValue() {
        return this.value;
    },

    // Method to print the current value of the string
    print() {
        console.log(this.getValue());
        return this; // Return 'this' for chaining
    }
};

stringManipulator.setValue('Hello').toUpperCase().print().toLowerCase().print().print().toUpperCase().print().print().reverse().print();

// HELLO
//  hello
