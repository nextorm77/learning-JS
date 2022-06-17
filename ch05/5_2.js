const x = 5;
const y = 3 - -x; // y는 8
console.log(y);

const s = "5";
const z = 3 + +s; // y는 8. 단항 플러스를 사용하지 않았다면 문자열 병합으로 "35"가 됨

// 여기서는 굳이 단항플러스가 필요하지 않지만 줄을 잘 맞출 수 있음
const x1 = 0,
  x2 = 3,
  x3 = -1.5,
  x4 = -6.33;
const p1 = -x1 * 1;
const p2 = +x2 * 2;
const p3 = +x3 * 3;
const p4 = -x4 * 4;

let a = 2;
const r1 = a++ + a++;
console.log(`r1: ${r1}`);
const r2 = ++a + ++a;
console.log(`r2: ${r2}`);
const r3 = a++ + ++a;
console.log(`r3: ${r3}`);
const r4 = ++a + a++;
console.log(`r4: ${r4}`);

let b = 10;
const r5 = b-- + b--;
console.log(`r5: ${r5}`);
const r6 = --b + --b;
console.log(`r6: ${r6}`);
const r7 = b-- + --b;
console.log(`r7: ${r7}`);
const r8 = --b + b--;
console.log(`r8: ${r8}`);
