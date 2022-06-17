const arr = [5, 7, 2, 4];
// reduce 함수(콜백함수, 초기 누적값)
// 초기 누적값을 생략하면 1st 배열요소를 초기값으로 하여 2nd 요소부터 함수 적용
// 콜백 함수 1st인자: 배열이 줄어드는 대상인 accumulator
// 2nd 인자: 현재 배열요소, 3rd 인자: 현재 인덱스, 4th 인자: 배열 자체
const sum = arr.reduce((a, x) => (a += x), 0);
console.log(sum);

const words = [
  "Beachball",
  "Rodeo",
  "Angel",
  "Aardvark",
  "Xylophone",
  "November",
  "Chocoate",
  "Papaya",
  "Uniform",
  "Joker",
  "Clover",
  "Bali",
];
const alphabetical = words.reduce((a, x) => {
  if (!a[x[0]]) a[x[0]] = [];
  a[x[0]].push(x); // push()는 먼저 해당 배열이 존재해야 사용 가능, 당연한 사실
  return a;
}, {});
console.log(alphabetical);

// 데이터셋의 평균(mean)과 분산(variance)를 계산
const data = [3.3, 5, 7.2, 12, 4, 6, 10.3];
// 도널드 커누스가 분산 계산을 위해 만들 알고리즘입니다.
const stats = data.reduce(
  (a, x) => {
    a.N++;
    let delta = x - a.mean;
    a.mean += delta / a.N;
    a.M2 += delta * (x - a.mean);
    return a;
  },
  { N: 0, mean: 0, M2: 0 }
);

if (stats.N > 2) {
  stats.variance = stats.M2 / (stats.N - 1);
  stats.stdev = Math.sqrt(stats.variance);
}

console.log(stats);

// trim()을 쓰지 않으면 배열 첫 요소 앞에 공백문자가 붙는다.
const longWords = words
  .reduce((a, w) => (w.length > 6 ? a + " " + w : a), "")
  .trim();
console.log(longWords);
