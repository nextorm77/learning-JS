const SYM = Symbol();

const o = { a: 1, b: 2, c: 3, [SYM]: 4 };

// Object.keys는 객체에서 나열 가능한 문자열 프로퍼티를 배열로 반환
// forEash는 배열 루프
Object.keys(o).forEach((prop) => console.log(`${prop}: ${o[prop]}`));

const o2 = { apple: 1, xochitl: 2, balloon: 3, guitar: 4, xylophone: 5 };

// /^x/: x로 시작하는
Object.keys(o2)
  .filter((prop) => prop.match(/^x/))
  .forEach((prop) => console.log(`${prop}: ${o2[prop]}`));
