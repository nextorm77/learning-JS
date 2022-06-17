// 13.6.2 함수에 함수를 전달

function sum(arr, f) {
  // 함수가 전달되지 않았으면 매개변수를 그대로 반환하는 null 함수를 씁니다.
  if (typeof f != "function") f = (x) => x;
  // reduce(콜백, 초기 누적값): 8.5 참조, a는 배열이 줄어드는 대상
  return arr.reduce((a, x) => (a += f(x)), 0);
}

console.log(sum([1, 2, 3]));
console.log(sum([1, 2, 3], (x) => x * x));
console.log(sum([1, 2, 3], (x) => Math.pow(x, 3)));
