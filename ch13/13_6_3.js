// 함수를 반환하는 함수

function sum(arr, f) {
  // 함수가 전달되지 않았으면 매개변수를 그대로 반환하는 null 함수를 씁니다.
  if (typeof f != "function") f = (x) => x;
  // reduce(콜백, 초기 누적값): 8.5 참조, a는 배열이 줄어드는 대상
  return arr.reduce((a, x) => (a += f(x)), 0);
}

/* 이미 만들어 둔 함수 활용
// 다양한 함수 적용 불가능
function sumOfSquares(arr) {
  return sum(arr, (x) => x * x);
}
*/

// 필요한 함수를 반환하는 함수
function newSummer(f) {
  return (arr) => sum(arr, f);
}

const sumOfSquares = newSummer((x) => x * x);
const sumOfCubes = newSummer((x) => Math.pow(x, 3));
console.log(sumOfSquares([1, 2, 3]));
console.log(sumOfCubes([1, 2, 3]));
