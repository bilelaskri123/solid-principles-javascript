/**
 * The Open-Closed Principle (OCP) states that software entities (classes, modules, functions, etc.)
 * should be open for extension but closed for modification
 */

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

// BAD Violate OCP
class AreaCalculator {
  // Adding a 'Triangle' would require modifying this function
  calculate(shape) {
    if (shape instanceof Rectangle) {
      return shape.area();
    } else if (shape instanceof Circle) {
      return shape.area();
    }
  }
}

const dataArea = new AreaCalculator();
console.log(dataArea.calculate(new Rectangle(10, 20)));
console.log(dataArea.calculate(new Circle(5)));
// console.log(dataArea.calculate(new Triangle(10, 5)));

// class Triangle {
//   constructor(base, height) {
//     this.base = base;
//     this.height = height;
//   }

//   area() {
//     return 0.5 * this.base * this.height;
//   }
// }
