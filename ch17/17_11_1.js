const input =
  "Address: 333 Main St., Anywhere, Ny, 55532. Phone: 555-555-2525.";
// 모든 문자(1개)에 일치
// 반면, '.*'는 줄바꿈을 제외한 모든 문자에 일치
const match = input.match(/[\s\S]/g);
console.log(match);
