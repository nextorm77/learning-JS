// ES5의 클래스
function Es5Car(make, model) {
  this.make = make;
  this.model = model;
  this.userGears = ["P", "N", "R", "D"];
  this.userGear = this.userGears[0];
}

class Es6Car {}

console.log(typeof Es5Car);
console.log(typeof Es6Car); // 클래스는 사실 함수다
