let n = 0;
/*
while (true) {
  n += 0.1;
  // 세 번째 반복할 때, n은 0.30000000000000004이므로
  // 0.3을 만족하지 못하므로 무한 루프
  if (n === 0.3) break;
}
*/
while (true) {
  n += 0.1;
  // JS의 숫자는 더블 형식이고 근사치
  // Number.EPSILON: 매우 작은 값(약 2.22e-16), 숫자형 상수
  // Number.EPSILON과 관계연산자를 사용해서 느슨하게(?) 비교
  if (Math.abs(n - 0.3) < Number.EPSILON) break;
}
console.log(`stopped at ${n}`);
