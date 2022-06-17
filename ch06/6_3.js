"use strict";
function avg(a, b) {
  return (a + b) / 2;
}

let result = avg(5, 10);
console.log(result); // 7.5

// 함수 바깥 변수명과 정해진 매개변수명이 동일해도 서로 다른 변수임
const a = 5,
  b = 10;
result = avg(a, b);
console.log(result);

function f1(x) {
  console.log(`f1 내부: x=${x}`);
  x = 5;
  console.log(`f1 내부: x=${x} (할당 후)`);
}

let x = 3;
console.log(`f1를 호출하기 전: x=${x}`);
f1(x);
console.log(`f1를 호출한 다음: x=${x}`);

function f2(o) {
  o.message = `f2 안에서 수정함(이전 값: '${o.message}')`;
}
let o1 = {
  message: "초기 값",
};
console.log(`f2를 호출하기 전: o1.message="${o1.message}"`);
f2(o1);
console.log(`f2를 호출한 다음: o1.message="${o1.message}"`);

function f3(o) {
  o.message = "f3에서 수정함";
  o = { message: "새로운 객체!" };
  console.log(`f3 내부: o.message="${o.message}" (할당 후)`);
}

let o2 = { message: "초기값" };

console.log(`f3를 호출하기 전: o2.message="${o2.message}"`);
f3(o2);
console.log(`f3를 호출한 다음: o2.message="${o2.message}"`);
