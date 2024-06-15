class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(Point1, Point2) {

        let result = Math.sqrt((Math.abs(Point1.x - Point2.x)**2) + (Math.abs(Point1.y - Point2.y)**2));

        return result;
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));