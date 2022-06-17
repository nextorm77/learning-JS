// 원시형
let a = 1; // 원본
let b = a; // 사본. b는 1, a가 아님
a = 2; // 원본의 값을 변경
console.log(b); // 1. 사본의 값은 바뀌지 않음

console.log(a === 2); // true

function change(a) {
  a = 5;
}

a = 3;
change(a);
console.log(a); // 3

// 참조타입
// 객체는 가변이고,
// 객체를 복사/전달할 때는 객체가 아니라 그 객체를 가리키고 있다는 사실(참조)를
// 복사/전달합니다. 따라서 원본이 바뀌면 사본도 따라서 바뀜.
// 그래서, 객체를 참조타입이라고 부르기도 함.
let o1 = { a: 1 };
let p1 = o1; // 이제 p는 o가 '가리키고 있는 것'을 가리킵
o1.a = 2;
console.log(p1); // { a: 2 }

let o2 = { a: 1 };
let p2 = o2; // 이제 p2는 o2가 '가리키고 있는 것'을 가리킵
console.log(p2 === o2); // true
o2 = { a: 2 }; // 이제 o2는 다른 것(컨테이너?)을 가리킴. { a: 1 } 객체(컨테이너?)를 수정한 것이 아님
console.log(p2); // { a: 1 }

// 객체를 가리키는 변수는 그 객체를 가리키고 있을 뿐 객체 자체는 아님
// 따라서 변수와 객체는 일치하지 않음
let q = { a: 1 };
console.log(q === { a: 1 }); // false

function change_o(o) {
  o.a = 999;
}

let o3 = { a: 1 };
change_o(o3);
console.log(o3); // {a: 999}
