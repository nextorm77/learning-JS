class Car {
  constructor() {}
}

const car1 = new Car();
const car2 = new Car();

let result = car1 instanceof Car;
console.log(result);
result = car2 instanceof Array;
console.log(result);
