// Promise 기반 비동기적 함수를 호출하면
// 그 함수는 Promise 인스턴스를 반환
// Promise는 성공(resolve)하거나 실패(reject) 둘 중 하나
function countdown(seconds) {
  // resolve, reject 는 함수
  return new Promise(function (resolve, reject) {
    for (let i = seconds; i >= 0; i--) {
      setTimeout(() => {
        if (i === 13) return reject(new Error("Oh my god"));
        if (i > 0) console.log(i + "...");
        else resolve(console.log("GO!"));
      }, (seconds - i) * 1000);
    }
  });
}
