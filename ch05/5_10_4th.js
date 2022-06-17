const arr = [1, 2, 3, 4, 5];

let [x, y, ...rest] = arr;
console.log(x); // 1
console.log(y); // 2
console.log(rest); // [3, 4, 5]

// 배열 해체를 사용하여 변수의 값을 서로 바꿈
// 해체 미사용시 중간에 임시 변수 필요
let a = 5,
  b = 10;
[a, b] = [b, a];
console.log(a); // 10
console.log(b); // 5
