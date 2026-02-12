class Bird {
  fly() {
    console.log("flying");
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error("Penguins can't fly!");
  }
}

class Eagle extends Bird {
  fly() {
    console.log("Eagle is flying high!");
  }
}

const eagle = new Eagle();
eagle.fly();
const penguin = new Penguin();
penguin.fly(); // throw an error
