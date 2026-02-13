class IDriveable {
  drive() {
    throw new Error("Mathod not implmented.");
  }
}

class IFlyable {
  fly() {
    throw new Error("Method not implmented");
  }
}

class Car extends IDriveable {
  drive() {
    console.log("The car is driving.");
  }
}

class Airplane extends IFlyable {
  fly() {
    console.log("The airplane is flying.");
  }
}

const airplane = new Airplane();
airplane.fly();
