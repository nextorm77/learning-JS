const before = { d: new Date() };
console.log("*before: " + before.d.toString());
console.log("before.d instanceof Date: " + (before.d instanceof Date));
// JSON으로 인코딩 된 날짜는 UTC
const json = JSON.stringify(before);
const after = JSON.parse(json);
console.log("after.d instanceof Date: " + (after.d instanceof Date));
console.log("typeof after.d: " + typeof after.d);

after.d = new Date(after.d);
console.log("after.d instanceof Date: " + (after.d instanceof Date));
// 사용자의 타임존을 기준으로 표시
console.log("*after: " + after.d.toString());

// 문자열로 인코딩하지 않고 valueOf()로 얻은 숫자 전송 가능
const before2 = { d: new Date().valueOf() };
console.log("*before2: " + before2.d);
console.log("typeof before2.d: " + typeof before2.d);
const json2 = JSON.stringify(before2);
const after2 = JSON.parse(json2);
console.log("typeof after2.d: " + typeof after2.d);
console.log("#after2: " + after2.d);
console.log(new Date(after2.d));
