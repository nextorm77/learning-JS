// 한 페이지에 문장 하나씩만 있는 어린이용 동화책
const book = [
  "Twinkle, twinkle, little bat!",
  "How I wonder what you're at!",
  "Up above the world you fly,",
  "Like a tea tray in the sky.",
  "Twinkle, twinkle, little bat!",
  "How I wonder what you're at!",
];

// 이터레이터(it) 생성
const it = book.values();

/* 읽기 시작(next()) 모사
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
*/

// while 루프를 사용한 for...of 루프 흉내
let current = it.next();
while (!current.done) {
  console.log(current.value);
  current = it.next();
}

// 이터레이터는 독립적
const it1 = book.values();
const it2 = book.values();
// 어느 이터레이터도 시작하지 않았음

// it1으로 2페이지를 읽음
console.log(it1.next());
console.log(it1.next());

// it2로 1페이지를 읽음
console.log(it2.next());

// it1으로 1페이지를 더 읽음
console.log(it1.next());
