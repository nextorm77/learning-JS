// 일치(===) 연산자와 동등(==) 연산자의 예
const n = 5;
const s = "5";
console.log(n === s); // false -- 타입이 다릅니다.
console.log(n !== s); // true
console.log(n === Number(s)); // true -- 문자열 "5"를 숫자 5로 변환
console.log(n !== Number(s)); // false
console.log(n == s); // true; 권장하지 않습니다.
console.log(n != s); // false; 권장하지 않습니다.

const a = { name: "an object" };
const b = { name: "an object" };
console.log(a === b); // false -- 객체는 항상 다름
console.log(a !== b); // true
console.log(a == b); // false; 권장하지 않음
console.log(a != b); // true; 권장하지 않음
