const obj = {}; // 빈 객체
obj.color = "yellow";
obj["not an identifier"] = 3;
console.log(obj["not an identifier"]); // 3
console.log(obj["color"]); // "yellow"

const SIZE = Symbol();
obj[SIZE] = 8; // 프로퍼티의 키는 SIZE 심볼, 문자열 "SIZE"가 아님
obj.SIZE = 0; // 점 연산자는 문자열 프로퍼티에 대해 항상 동작
console.log(obj);
console.log(obj[SIZE]); // 심볼 프로퍼티는 '대괄호'로 접근?
