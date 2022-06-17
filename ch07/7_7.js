// 즉시 호출하는 함수 표현식
const message = (function () {
  const secret = "I'm a secret!"; // secret 은 외부에서 접근X
  return `The secret is ${secret.length} character long.`;
})();
console.log(message);

const f = (function () {
  let count = 0;
  return function () {
    return `I have been called ${++count} time(s).`;
  };
})();
console.log(f());
// 클로저, 스코프안에서 함수를 정의하면 해당 스코프는 바로 제거되지 않고 더 오래 유지?
console.log(f());
