/*
var i;
for (i = 5; i >= 0; i--) {
  setTimeout(function () {
    console.log(i === 0 ? "go!" : i);
  }, (5 - i) * 1000);
}
// 결과
// -1(외부변수 i 참조)이 6번 출력
// setTimeout에 전달된 함수가 루프안에서 실행되지 않고
// 루프가 종료된 후에 실행
*/

/* 루프의 각 단계에서 전달되는 것은 
// 변수 i가 아니라 i의 값
// 7개의 스코프(1개의 외부 스코프, 6개의 loopBody 호출)
function loopBody(i) {
  setTimeout(function () {
    console.log(i === 0 ? "go!" : i);
  }, (5 - i) * 1000);
}

var i;
for (i = 5; i >= 0; i--) {
  loopBody(i);
}
*/
/* IIFE 사용
// 일회용 함수를 대신하여 익명 함수 사용
var i;
for (i = 5; i >= 0; i--) {
  (function (i) {
    setTimeout(function () {
      console.log(i === 0 ? "go!" : i);
    }, (5 - i) * 1000);
  })(i);
}
*/

// 블록 스코프 변수 사용
for (let i = 5; i >= 0; i--) {
  setTimeout(function () {
    console.log(i === 0 ? "go!" : i);
  }, (5 - i) * 1000);
}
