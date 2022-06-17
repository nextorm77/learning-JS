class Car {
  // VIN: 자동차식별번호
  // VIN 할당은 자동차 전체를 대상으로 하는 추상적 개념
  // 정적 메서드(클래스 메서드)가 어울림
  static getNextVin() {
    // this.nextVin++ 라고 써도 되지만,
    // Car를 앞에 쓰면 정적 메서드라는 점을
    // 상기하기 쉽습니다.
    return Car.nextVin++;
  }
  constructor(make, model) {
    // 생성자에서 인스턴스의 프로퍼티(?)를 선언
    this.make = make;
    this.model = model;
    this.vin = Car.getNextVin();
  }
  static areSimilar(car1, car2) {
    return car1.make === car2.make && car1.model === car2.model;
  }
  static areSame(car1, car2) {
    return car1.vin === car2.vin;
  }
}
Car.nextVin = 0;

const car1 = new Car("Tesla", "Y");
const car2 = new Car("Kia", "EV6");
const car3 = new Car("Kia", "EV6");

car1.vin;
car2.vin;
car3.vin;

let result = Car.areSimilar(car1, car2);
console.log(result);

result = Car.areSimilar(car2, car3);
console.log(result);

result = Car.areSame(car2, car3);
console.log(result);

result = Car.areSame(car2, car2);
console.log(result);
