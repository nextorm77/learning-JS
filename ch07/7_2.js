const x = 3;

function f() {
  console.log(x);
  console.log(y);
}

{
  // 새 스코프
  const y = 5;
  // JS의 스코프는 정적
  // 어떤 변수가 함수 스코프 안에 있는 지 함수를 정의할 때 알 수 있음
  // 호출할 때 알 수 있는 것 아님
  f();
}
