class Car {
  constructor(make, model) {
    // 여기서 this는 메서드를 호출한 인스턴스를 가리킴
    this.make = make;
    this.model = model;
    this._userGears = ["P", "N", "R", "D"];
    this._userGear = this._userGears[0]; // userGear는 현재 기어
  }
  // getter 접근자 프로퍼티?
  get userGear() {
    return this._userGear;
  }
  // setter 접근자 프로퍼티?
  set userGear(value) {
    // ._userGear 직접 수정시 막을 수 없음.
    // 다만 프로퍼티명을 보고 직접 접근 위험성(?)을 알림
    if (this._userGears.indexOf(value) < 0)
      throw new Error(`Invaild gear: ${value}`);
    this._userGear = value;
  }

  shift(gear) {
    this.userGear = gear;
  }
}

const car1 = new Car("Tesla", "Model Y");
const car2 = new Car("Kia", "EV6");
car1.shift("D");
car2.shift("R");
car1._userGear = "P"; // 아직도 프로퍼티에 직접 접근 가능
console.log(car1.userGear);
console.log(car2.userGear);
