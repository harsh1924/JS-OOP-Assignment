class Shape {
    constructor() {
        this.type = "Shape"
    }
    Area() {
        return "Area"
    }
    Perimeter() {
        return "Perimeter"
    }
};

class Circle extends Shape {
    constructor(radius) {
        super();
        this.type = "Circle";
        this.radius = radius;
    }
    Area() {
        return Math.PI * this.radius * this.radius;
    }
    Perimeter() {
        return 2 * Math.PI * this.radius
    }
};

class Rectangle extends Shape {
    constructor(length, breadth) {
        super();
        this.type = "Rectangle";
        this.length = length;
        this.breadth = breadth;
    }
    Area() {
        return this.length * this.breadth;
    }
    Perimeter() {
        return 2 * (this.length + this.breadth)
    }
};

class Triangle extends Shape {
    constructor(base, height, sideOne, sideTwo, sideThree) {
        super();
        this.type = "Triangle";
        this.base = base;
        this.height = height;
        this.sideOne = sideOne;
        this.sideTwo = sideTwo;
        this.sideThree = sideThree;
    }
    Area() {
        return 0.5 * this.base * this.height;
    }
    Perimeter() {
        return this.sideOne + this.sideTwo + this.sideThree;
    }
}

const circle = new Circle(8);
console.log(`Area of Circle: ${circle.Area()}`);            // Area of Circle: 201.06192982974676
console.log(`Perimeter of Circle: ${circle.Perimeter()}`);  // Perimeter of Circle: 50.26548245743669

const rectangle = new Rectangle(38, 23);
console.log(`Area of Rectangle: ${rectangle.Area()}`);            // Area of Rectangle: 874
console.log(`Perimter of Rectangle: ${rectangle.Perimeter()}`);   // Perimter of Rectangle: 122

const triangle = new Triangle(10, 23, 37, 17, 20);
console.log(`Area of Triangle: ${triangle.Area()}`);              // Area of Triangle: 115
console.log(`Perimeter of Triangle: ${triangle.Perimeter()}`);    // Perimeter of Triangle: 74