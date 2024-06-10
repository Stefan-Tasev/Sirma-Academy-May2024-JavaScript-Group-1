class List {
    _sortedList = [];

    add(element) {
        this._sortedList.push(element);
        this._sortedList.sort((a, b) => a - b);
    }

    remove(index) {
        if (Number(index) >= this._sortedList.length || Number(index) < 0) {
            return 'Invalid index! Index out of range!'
        }

        this._sortedList.splice(Number(index), 1);
    }

    get(index) {
        if (Number(index) >= this._sortedList.length || Number(index) < 0) {
            return 'Invalid index! Index out of range!'
        }

        return this._sortedList[Number(index)];
    }

    get size() {
        return this._sortedList.length;
    }

    get visualizeList() {
        return this._sortedList.join(' ');
    }
}

let list = new List();
list.add(8);
list.add(26);
list.add(3);
list.add(9);
list.add(0);
list.add(1);
list.add(79);
list.add(80);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
console.log(list.size);
console.log(list.visualizeList);

