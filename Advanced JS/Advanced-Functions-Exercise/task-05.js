function createPrivateCounter(initialValue = 0) {
    let _currentValue = initialValue; // Private variable

    return {
        getCount: function () {
            return _currentValue; // Getter method
        },
        increment: function () {
            _currentValue++; // Setter method
        }
    };
}

//...
const counter = createPrivateCounter();
counter.increment();
console.log(counter.getCount()); // Output: 1

counter.increment();
console.log(counter.getCount()); // Output: 2
