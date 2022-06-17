// 재귀

// 1. 건초 더미(배열 첫째 요소)에서 바늘이 보이면 3단계로 이동
// 2. 건초 더미에서 건초(hay)를 하나 덜어낸다. 1단계로 이동한다
// 3. 찾았다!

function findNeedle(haystack) {
  if (haystack.length === 0) return "No haystack here!";
  // shift()는 배열 첫 요소를 꺼내서 반환
  if (haystack.shift() === "needle") return "found it!";
  // 호출한 자리에 반환되면서 재귀?
  return findNeedle(haystack);
}

let result = findNeedle(["hay", "hay", "hay", "needle", "hay", "hay"]);
console.log(result);

// 숫자의 계승(factorial) 찾기
function fact(n) {
  if (n === 1) return 1;
  return n * fact(n - 1);
}

result = fact(3);
console.log(result);
