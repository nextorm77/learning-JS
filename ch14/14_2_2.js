/* 스코프와 비동기적 실행
function countdown() {
  let i; // i를 루프 밖에서 선언
  console.log("Countdown");
  for (i = 5; i >= 0; i--) {
    // setTimeout()은 동기적 실행
    // but 전달된 콜백 함수는 비동기적 실행
    // 콜백은 자신을 선언한 스코프(클로저)에 있는 것에 접근 가능
    setTimeout(function () {
      console.log(i === 0 ? "GO!" : i);
    }, (5 - i) * 1000);
  }
}
*/

function countdown() {
  console.log("Countdown");
  for (let i = 5; i >= 0; i--) {
    // 이제 i는 블록 스코프 변수
    // setTimeout()은 동기적 실행
    // but 전달된 콜백 함수는 비동기적 실행
    // 콜백은 자신을 선언한 스코프(클로저)에 있는 것에 접근 가능(6번 스코프 발생?)
    setTimeout(function () {
      console.log(i === 0 ? "GO!" : i);
    }, (5 - i) * 1000);
  }
}

countdown();
