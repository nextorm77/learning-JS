const Car = (function () {
  const carProps = new WeakMap();

  class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
      this._userGears = ["P", "N", "R", "D"];
      carProps.set(this, { userGear: this._userGears[0] });
    }
    get userGear() {
      return carProps.get(this).userGear;
    }
    set userGear(value) {
      if (this._userGears.indexOf(value) < 0)
        throw new Error(`Invalid gear: ${value}`);
      carProps.get(this).userGear = value;
    }

    shift(gear) {
      this.userGear = gear;
    }
  }

  return Car; // 클래스를 리턴
})(); // 즉시 호출하는 함수 표현식

const car1 = new Car("Tesla", "Model Y");
const car2 = new Car("Kia", "EV6");
car1.shift("D");
car2.shift("R");
//car1.userGear = "S"; // userGear프로퍼티에 직접 접근 불가능
console.log(car1.userGear);
console.log(car2.userGear);
