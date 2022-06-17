const o = { name: "Jerry" };
const arr = [1, 5, "a", o, true, 5, [1, 2], "9"];
console.log(`arr.indexOf(5): ${arr.indexOf(5)}`);
console.log(`arr.lastIndexOf(5): ${arr.lastIndexOf(5)}`);
console.log(`arr.indexOf('a'): ${arr.indexOf("a")}`);
console.log(`arr.lastIndexOf('a'): ${arr.lastIndexOf("a")}`);
console.log(
  `arr.indexOf({ name: "Jerry" }): ${arr.indexOf({ name: "Jerry" })}`
); // 참조를 검색하므로 찾지 못함(-1) 반환
console.log(`arr.indexOf(o): ${arr.indexOf(o)}`);
console.log(`arr.indexOf([1, 2]): ${arr.indexOf([1, 2])}`); // 참조를 검색하므로 찾지 못함(-1) 반환?
console.log(`arr.indexOf("9"): ${arr.indexOf("9")}`);
console.log(`arr.indexOf(9): ${arr.indexOf(9)}`);

// 2nd 인자는 검색 시작 인덱스
console.log(`arr.indexOf("a", 5): ${arr.indexOf("a", 5)}`);
console.log(`arr.indexOf(5, 5): ${arr.indexOf(5, 5)}`);
console.log(`arr.lastIndexOf(5, 4): ${arr.lastIndexOf(5, 4)}`); // 시작 인덱스 4 부터 거꾸로
console.log(`arr.lastIndexOf(true, 3): ${arr.lastIndexOf(true, 3)}`);
