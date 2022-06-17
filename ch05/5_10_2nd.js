// 객체 해제
const obj = { b: 2, c: 3, d: 4 };
let a, b, c;

// 에러가 발생, vscode 에디터에서 먼저 인지
// {a, b, c} = obj;

// 정상 동작
({ a, b, c } = obj);
console.log(a);
console.log(b);
console.log(c);
