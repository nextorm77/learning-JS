// 전역 스코프

// 함수들이 전역변수에 의존: 나쁜 예
let name = "Irena"; // 전역
let age = 15; // 전역

function greet1() {
  console.log(`Hello, ${name}!`);
}

function getBirthYear1() {
  return new Date().getFullYear() - age;
}

// 개선1: 단일객체(여전히 전역변수임)에 보관하여 접근
let user = {
  name: "Irena",
  age: 15,
};

function greet2() {
  console.log(`Hello, ${user.name}!`);
}

function getBirthYear2() {
  return new Date().getFullYear() - user.age;
}

// 개선2: 명시적으로 user를 전달받음
function greet3(user) {
  console.log(`Hello, ${user.name}!`);
}

function getBirthYear3(user) {
  return new Date().getFullYear() - user.age;
}
