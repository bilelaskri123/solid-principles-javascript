class IVehicle {
  drive() {
    throw new Error("Method not implmented.");
  }

  fly() {
    throw new Error("Method not implmented.");
  }
}

// violate ISP because Car implmenet fly method (car cannot fly), that does not need it.
class Car extends IVehicle {
  drive() {
    console.log("The car is driving.");
  }

  fly() {
    throw new Error("A car cannot fly.");
  }
}

// violate ISP because Airplaine implement drive method that does not need.
class Airplane extends IVehicle {
  drive() {
    throw new Error("An airplane cannot drive.");
  }

  fly() {
    console.log("The airplane is flying");
  }
}

const airplane = new Airplane();
airplane.fly();
airplane.drive(); // thrown an error
