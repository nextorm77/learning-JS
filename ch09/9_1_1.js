const SYM = Symbol();

const o = { a: 1, b: 2, c: 3, [SYM]: 4 };

// for...in 루프에는 키가 심볼인 프로퍼티는 포함되지 X
// 배열엔 일반적인 for 루프나 forEach 사용 권장?
for (let prop in o) {
  if (!o.hasOwnProperty(prop)) continue;
  console.log(`${prop}: ${o[prop]}`);
}
