class Car {
  toString() {
    return `${this.make} ${this.model}: ${this.vin}`;
  }
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

class InsurancePolicy {}
/* Car 클래스의 메서드 이름과 충돌 가능성 있음
function makeInsurable(o) {
  o.addInsurancePolicy = function (p) {
    this.insurancePolicy = p;
  };
  o.getInsurancePolicy = function () {
    return this.insurancePolicy;
  };
  o.isInsured = function () {
    return !!this.insurancePolicy;
  };
}
*/

// Symbol은 항상 고유하므로 믹스인이
// Car 클래스의 기능과 충돌 가능성 없음
const ADD_POLICY = Symbol();
const GET_POLICY = Symbol();
const IS_INSURED = Symbol();
const _POLICY = Symbol();
function makeInsurable(o) {
  // 매개변수 p는 Policy를 뜻함
  o[ADD_POLICY] = function (p) {
    this[_POLICY] = p;
  };
  o[GET_POLICY] = function () {
    return this[_POLICY];
  };
  o[IS_INSURED] = function () {
    return !!this[_POLICY];
  };
}
// Symbol 사용 끝

Car.nextVin = 0;

const car3 = new Car("Kia", "EV6");

/* 잘못된 믹스인
makeInsurable(Car); // 클래스(자동차 추상화 개념)를 넘길 수 X
const car1 = new Car("Tesla", "Y");
car1.addInsurancePolicy(new InsurancePolicy()); // error
*/

/* 1st 개선
//동작은 하지만 모든 Car(자동차)에서 makeInsurable을 호출해야 함
const car1 = new Car("Tesla", "Y");
makeInsurable(car1);
car1.addInsurancePolicy(new InsurancePolicy());
*/

/* 2nd 개선
// 모든 Car(자동차)에서 makeInsurable을 호출하지 않아도 됨
makeInsurable(Car.prototype);
const car1 = new Car("Tesla", "Y");
const car2 = new Car("Kia", "EV6");
car1.addInsurancePolicy(new InsurancePolicy());
car2.addInsurancePolicy(new InsurancePolicy());
*/

// 3rd 개선
// makeInsurable()내 메서드명과 Car 클래스 메서드 충돌 위험 방지
// 심볼을 사용하여 해당 문제 경감(?)
makeInsurable(Car.prototype);
const car1 = new Car("Tesla", "Y");
const car2 = new Car("Kia", "EV6");
car1[ADD_POLICY](new InsurancePolicy());
car2[ADD_POLICY](new InsurancePolicy());
