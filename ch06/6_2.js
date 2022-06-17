function getGreeting() {
  return "Hello, world!";
}

console.log(getGreeting()); // "Hello, world!"

// 함수를 변수에 할당
const f = getGreeting; // function getGreeting()
console.log(f()); // "Hello, world!"

// 함수를 객체 프로퍼티에 할당
const o = {};
o.f = getGreeting;
console.log(o.f()); // "Hello, world!"

// 함수를 배열 요소에 할당
const arr = [1, 2, 3];
arr[1] = getGreeting; // arr은 이제 [1, function getGreeing(), 3]
console.log(arr);
// arr[1]은 값이 되는 표현식
// 값뒤에 괄호를 붙이면 함수로 간주하고 호출
// 함수가 아닌 값을 호출하면 관련 에러 발생
console.log(arr[1]()); // "Hello, world!"
