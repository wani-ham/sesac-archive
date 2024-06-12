// const word1 = "abc";
// const word2 = "xyz";
// const result = [...word1, ...word2];
// console.log(result);

class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

let rec1 = new Shape(3, 4);
console.log(rec1.getArea());

class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);
    }

    getDiag() {
        return Math.sqrt(this.width**2 + this.height**2);
    }
}

class Triangle extends Shape {
    constructor(width, height) {
        super(width, height);
    }

    getArea() {
        return 0.5 * this.height * this.width;
    }
}

class Circle extends Shape {
    constructor(width, height, radius) {
        super(width, height);
        this.radius = radius;
    }

    getArea() {
        return this.radius**2 * Math.PI;
    }
}

let rec2 = new Rectangle(2, 3);
let tri1 = new Triangle(2, 4);
let cir1 = new Circle(0, 0, 3);

console.log(rec2.getArea());
console.log(tri1.getArea());
console.log(cir1.getArea());

