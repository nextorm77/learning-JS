class Person {
  constructor(name) {
    this.name = name;
    this.id = Person.nextId++; // nextId는 static?
  }
}
Person.nextId = 0;
const jamie = new Person("Jamie"),
  juliet = new Person("Juliet"),
  peter = new Person("Peter"),
  jay = new Person("Jay");

const arr = [jamie, juliet, peter, jay];

// 옵션 1: ID를 직접 비교하는 방법
let result = arr.find((p) => p.id === juliet.id);
console.log(result);

// 옵션2: 'this' 매개변수를 이용하는 방법
// 화살표 함수 사용시 정상 작동X
result = arr.find(function (p) {
  return p.id === this.id;
}, juliet);
console.log(result);

// 요소가 있는 지 없는 지만 알고 싶을 경우
const arr2 = [5, 7, 12, 15, 17];

result = arr2.some((x) => x % 2 === 0);
console.log(result);

result = arr2.some((x) => Number.isInteger(Math.sqrt(x)));
console.log(result);

// every는 모든 요소가 조건에 맞아야 true, 아니면 false
const arr3 = [4, 6, 16, 36];

result = arr3.every((x) => x % 2 === 0);
console.log(result);

result = arr3.every((x) => Number.isInteger(Math.sqrt(x))); // false; 6은 제곱수가 아님
