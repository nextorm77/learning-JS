// 비밀번호가 규칙에 맞는 지 검사
// 비번에는 대문자와 소문자, 숫자가 최소한 하나씩 포함되어야 하고
// 글자도 아니고 숫자도 아닌 문자는 들어 갈 수 없다고 가정
function validPassword(p) {
  return (
    /[A-Z]/.test(p) &&
    /[a-z]/.test(p) &&
    /[0-9]/.test(p) &&
    !/[^a-zA-Z0-9]/.test(p)
  );
}

// 룩어헤드 사용하여 단축
function validPassword2(p) {
  return /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?!.*[^a-zA-Z0-9])/.test(p);
}
