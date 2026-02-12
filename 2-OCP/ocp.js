class Shape {
  area() {
    throw new Error("Method not implemented");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  area() {
    return 0.5 * this.base * this.height;
  }
}

class AreaCalculator {
  calculate(shape) {
    return shape.area();
  }
}

const rectangle = new Rectangle(10, 20);
const circle = new Circle(5);
const triangle = new Triangle(10, 5);
const calculator = new AreaCalculator();

console.log(calculator.calculate(rectangle)); // 200
console.log(calculator.calculate(circle)); // 78.54
console.log(calculator.calculate(triangle)); // 25
