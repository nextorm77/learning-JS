// 객체 선언
const obj = { b: 2, c: 3, d: 4 };

// 해체 할당, 해체와 할당을 같은 문에서 실행
const { a, b, c } = obj;
console.log(a); // undefined: obj에는 "a" 프로퍼티가 없음
console.log(b); // 2
console.log(c); // 3
console.log(d); // ReferenceError: "d"는 정의되지 않음
