class Bird {
  eat() {
    console.log("Eating...");
  }
}

class FlyingBird extends Bird {
  fly() {
    console.log("Flying...");
  }
}

class Penguin extends Bird {
  swim() {
    console.log("Penguin is swimming!");
  }
}

class Eagle extends FlyingBird {
  fly() {
    console.log("Eagle is flying high!");
  }
}

const eagle = new FlyingBird();
eagle.fly();

const penguin = new Penguin();
penguin.swim();
