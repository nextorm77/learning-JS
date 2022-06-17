function addThreeSquareAddFiveTakeSquareRoot(x) {
  // 설마 이런 이름을 짓지 않겠지만
  return Math.sqrt(Math.pow(x + 3, 2) + 5);
}

// 별명을 쓰기 전
const answer1 =
  (addThreeSquareAddFiveTakeSquareRoot(5) +
    addThreeSquareAddFiveTakeSquareRoot(2)) /
  addThreeSquareAddFiveTakeSquareRoot(7);

// 별명을 쓰면 이렇게 바뀜
const f = addThreeSquareAddFiveTakeSquareRoot;
const answer2 = (f(5) + f(2)) / f(7);

const Money = require("math-money");

const oneDollar = Money.Dollar(1);
console.log(oneDollar);

// Money.Dollar도 길게 느껴지면 이렇게 해도 됨
const Dollar = Money.Dollar;
const twoDollars = Dollar(2);
console.log(twoDollars);
// oneDollar와 twoDollar는 같은 타입의 인스턴스
