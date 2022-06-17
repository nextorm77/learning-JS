class Car {
  constructor(make, model) {
    // 여기서 this는 메서드를 호출한 인스턴스를 가리킴
    this.make = make;
    this.model = model;
    this.userGears = ["P", "N", "R", "D"];
    this.userGear = this.userGears[0]; // userGear는 현재 기어
  }
  shift(gear) {
    // .userGear 직접 수정시 막을 수 없음.
    // private, public 속성이 없어서?
    if (this.userGears.indexOf(gear) < 0)
      throw new Error(`Invaild gear: ${gear}`);
    this.userGear = gear;
  }
}

const car1 = new Car("Tesla", "Model Y");
const car2 = new Car("Kia", "EV6");
car1.shift("D");
car2.shift("R");
console.log(car1.userGear);
console.log(car2.userGear);
