// 카드 덱을 만듭니다.
const cards = [];

for (let suit of ["H", "C", "D", "S"]) {
  for (let value = 1; value <= 13; value++) {
    cards.push({ suit, value });
  }
}

// value가 2인 카드
let result = cards.filter((c) => c.value === 2);
console.log(result);

// 다이아몬드
result = cards.filter((c) => c.suit === "D");
console.log(result);

// 킹, 퀸, 주니어
result = cards.filter((c) => c.value > 10);
console.log(result);

// 하트의 킹, 퀸, 주니어
result = cards.filter((c) => c.value > 10 && c.suit === "H");
console.log(result);

//=> 짧은 문자열(카드그림)로 변환 함수
const suits = { H: "\u2665", C: "\u2663", D: "\u2666", S: "\u2660" };
const values = { 1: "A", 11: "J", 12: "Q", 13: "K" };
for (let i = 2; i <= 10; i++) values[i] = i;

function cardsToString(c) {
  return values[c.value] + suits[c.suit];
}

// value가 2인 카드
result = cards.filter((c) => c.value === 2).map(cardsToString);
console.log(result);

// 하트의 킹, 퀸, 주니어
result = cards.filter((c) => c.value > 10 && c.suit === "H").map(cardsToString);
console.log(result);
