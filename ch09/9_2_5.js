class Vehicle {
  constructor() {
    this.passengers = [];
    console.log("Vehicle created.");
  }
  addPassengers(p) {
    this.passengers.push(p);
  }
}

class Car extends Vehicle {
  constructor() {
    super();
    console.log("Car created.");
  }
  deployAirbags() {
    console.log("BWOOSH!");
  }
}

const v = new Vehicle();
v.addPassengers("Frank");
v.addPassengers("Judy");
console.log(v.passengers);
const c = new Car();
c.addPassengers("Alice");
c.addPassengers("Cameron");
console.log(c.passengers);
// v.deployAirbags(); // error
c.deployAirbags();
