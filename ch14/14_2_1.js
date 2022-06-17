const start = new Date();
let i = 0;
// 콜백 참조 외부 변수: start, i, intervalID
// 분이 넘어가거나 10회째가 될 때까지 5초마다 콜백 실행
const intervalId = setInterval(function () {
  let now = new Date();
  if (now.getMinutes() !== start.getMinutes() || ++i > 10)
    return clearInterval(intervalId);
  console.log(`${i}:${now}`);
}, 5 * 1000);
