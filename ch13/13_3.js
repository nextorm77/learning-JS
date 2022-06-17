const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let colorIndex = -1;
// 순수한 함수의 정의 2개 원칙을 어김
// 입력이 같아도(매개변수 없음) 결과가 항상 같지 않고
// (외부)변수 colorIndex를 변경시키는 부수 효과가 있음
function getNextRainbowColor1() {
  if (++colorIndex >= colors.length) colorIndex = 0;
  return colors[colorIndex];
}

console.log(getNextRainbowColor1());
console.log(getNextRainbowColor1());

// 개선 1: 외부변수 변경 차단
const getNextRainbowColor2 = (function () {
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];
  let colorIndex = -1;
  return function () {
    if (++colorIndex >= colors.length) colorIndex = 0;
    return colors[colorIndex];
  };
})();

console.log(getNextRainbowColor2());
console.log(getNextRainbowColor2());

// 개선 2: 이터레이터 사용->관점을 함수에서 메서드로
function getRainbowIterator() {
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];
  let colorIndex = -1;
  return {
    next() {
      if (++colorIndex >= colors.length) colorIndex = 0;
      return { value: colors[colorIndex], done: false };
    },
  };
}

const rainbowIterator = getRainbowIterator();
// 사용예
const a = rainbowIterator.next().value;
