// typeof 연산자, 연산자이므로 괄호가 필요 없음
// 7개 데이터 타입(undefined, null, 불리언, 숫자, 문자열, 심볼, 객체)를
// 정확히 나타내지 못하여 비판과 혼란을 초래했음
console.log(typeof undefined);
console.log(typeof null); // 부정확
console.log(typeof {});
console.log(typeof true);
console.log(typeof 1);
console.log(typeof "");
console.log(typeof Symbol()); // ES6에서 새로 생김
console.log(typeof function () {});
